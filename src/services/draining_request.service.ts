import { DrainingRequestRepository } from 'src/repository/draining-request.repository';
import { isNumber } from 'util';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les homes doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class DrainingRequestService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: DrainingRequestRepository;
    constructor() {
        this.repository = new DrainingRequestRepository();
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

        // Récupération du draining_request
        return await this.repository.findById(id);
    }

}
