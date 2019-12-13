import express, { Router, Request, Response, Application } from 'express';
import { SlotService } from '../services/slot.service';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const SlotController = (app: Application) => {

    const slotRouter: Router = express.Router();
    const slotService = new SlotService();

    slotRouter.post('/', (req: Request, res: Response) => {
        const slot = req.body;
        slotService.signUp(slot);
        res.send(slot);
    });

    slotRouter.get('/', async (req: Request, res: Response) => {
        const result = await slotService.getAll();
        res.send(result);
    });

    slotRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await slotService.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id n\'a pas été trouvé' + id);
        }
    });

    app.use('/slots', slotRouter);
};
