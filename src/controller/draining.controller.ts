
import express, { Router, Request, Response, Application } from 'express';
import { DrainingService } from 'src/services/draining.service';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const DrainingController = (app: Application) => {

    const drainingRouter: Router = express.Router();
    const drainingService = new DrainingService();

    drainingRouter.post('/', (req: Request, res: Response) => {
        const user = req.body;
        drainingService.signUp(user);
        res.send(user);
    });

    drainingRouter.put('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const user = req.body;
        drainingService.modifyDraining(user, id);
        res.send(user);
    });

    drainingRouter.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        drainingService.deleteDraining(id);
        res.send();
    });

    drainingRouter.get('/', async (req: Request, res: Response) => {
        const result = await drainingService.getAll();
        res.send(result);
    });

    drainingRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await drainingService.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id n\'a pas été trouvé' + id);
        }
    });

    app.use('/drainings', drainingRouter);
};
