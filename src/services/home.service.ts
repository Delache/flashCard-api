import { HomeRepository } from '../repository/home.repository';
import { Home } from 'src/models/home';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les documents doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class HomeService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: HomeRepository;
    constructor() {
        this.repository = new HomeRepository();
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

        // Récupération du foyer
        return await this.repository.findById(id);
    }

    // Create du foyer
    async create(home: Home) {
        return this.repository.save(home);
    }

    // Modification du foyer
    async modifyHome(home: Home, id: number) {
        return this.repository.modify(home, id);
    }

    // Suppression du foyer
    async deleteHome(id: number) {
        return this.repository.delete(id);
    }

}
