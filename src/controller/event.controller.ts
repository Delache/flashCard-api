import { EventService } from '../services/event.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const EventController = (app: Application) => {

    const eventRouter: Router = express.Router();
    const eventService = new EventService();

    eventRouter.post('/', (req: Request, res: Response) => {
        const event = req.body;
        eventService.upload(event);
        res.send(event);
    });

    eventRouter.put('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const event = req.body;
        eventService.modifyEvent(event, id);
        res.send(event);
    });

    eventRouter.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        eventService.deleteEvent(id);
        res.send();
    });

    eventRouter.get('/', async (req: Request, res: Response) => {
        const result = await eventService.getAll();
        res.send(result);
    });

    eventRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await eventService.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id n\'a pas été trouvé' + id);
        }
    });

    app.use('/events', eventRouter);
};

// get all et get par id fonctionnent
