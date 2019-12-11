import express, { Router, Request, Response, Application } from 'express';
import { HomeService } from '../services/home.service';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const HomeController = (app: Application) => {

    const homeRouter: Router = express.Router();
    const homeService = new HomeService();

    homeRouter.post('/', (req: Request, res: Response) => {
        const home = req.body;
        homeService.create(home);
        res.send(home);
    });

    homeRouter.put('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const home = req.body;
        homeService.modifyHome(home, id);
        res.send(home);
    });

    homeRouter.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        homeService.deleteHome(id);
        res.send();
    });

    homeRouter.get('/', async (req: Request, res: Response) => {
        const result = await homeService.getAll();
        res.send(result);
    });

    homeRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await homeService.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id n\'a pas été trouvé' + id);
        }
    });

    app.use('/homes', homeRouter);
};

// get all et get par id fonctionnent
