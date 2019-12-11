import { Event } from './../models/event';
import { EventRepository } from '../repository/event.repository';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les Events doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class EventService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: EventRepository;
    constructor() {
        this.repository = new EventRepository();
    }

    // Business logic

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }

    async getById(id: number) {
        // Vérification des données
        if (!Number.isInteger(id)) {
            throw new Error('error');
        }

        // Récupération du Event
        return await this.repository.findById(id);
    }

    // upload du Event
    async upload(event: Event) {
        return this.repository.save(event);
    }

    // modification du Event
    async modifyEvent(event: Event, id: number) {
        return this.repository.modifyEvent(event, id);
    }

    // suppression du Event
    async deleteEvent(id: number) {
        return this.repository.deleteEvent(id);
    }

}
