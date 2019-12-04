import { UserRepository } from '../repository/user.repository';
import { User } from './../models/user';
import { isNumber } from 'util';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les users doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class UserService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    // Business logic

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }

    async getById(id: number) {
        // Vérification des données
        if (!Number.isInteger(id)) {
            throw new Error('erreor');
        }

        // Récupération du user
        return await this.repository.findById(id);
    }

    signUp(user: User) {
        return this.repository.save(user);
    }
}
