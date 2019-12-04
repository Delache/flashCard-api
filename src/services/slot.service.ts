import { SlotRepository } from 'src/repository/slot.repository';
import { isNumber } from 'util';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les homes doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class SlotService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: SlotRepository;
    constructor() {
        this.repository = new SlotRepository();
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

        // Récupération du créneau de rdv
        return await this.repository.findById(id);
    }

}
