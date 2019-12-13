import { ProductionRepository } from '../repository/production.repository';

export class ProductionService {

    private repository: ProductionRepository;
    constructor() {
        this.repository = new ProductionRepository();
    }

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }

    async getById(id: number) {
        if (!Number.isInteger(id)) {
            throw new Error('error');
        }
        return await this.repository.findById(id);
    }

}
