import { EventRepository } from 'src/repository/event.repository';
import { isNumber } from 'util';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les homes doit apparaitre.
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

        // Récupération du event
        return await this.repository.findById(id);
    }

}
