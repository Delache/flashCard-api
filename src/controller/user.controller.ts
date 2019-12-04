import { UserService } from './../services/user.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {

    const userRouter: Router = express.Router();
    const userService = new UserService();

    userRouter.post('/signup', (req: Request, res: Response) => {
        //
    });

    userRouter.get('/', async (req: Request, res: Response) => {
        const result = await userService.getAll();
        res.send(result);
    });

    app.use('/users', userRouter);
};
