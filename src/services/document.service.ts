import { DocumentRepository } from '../repository/document.repository';
import { isNumber } from 'util';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les documents doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class DocumentService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: DocumentRepository;
    constructor() {
        this.repository = new DocumentRepository();
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

        // Récupération du document
        return await this.repository.findById(id);
    }

}
