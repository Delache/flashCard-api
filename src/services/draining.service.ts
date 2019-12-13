import { DrainingRepository } from '../repository/draining.repository';
import { Draining } from '../models/draining';

export class DrainingService {

    private repository: DrainingRepository;
    constructor() {
        this.repository = new DrainingRepository();
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

    async createDraining(draining: Draining) {
        return this.repository.save(draining);
    }

    async modifyDraining(draining: Draining, id: number) {
        return this.repository.modify(draining, id);
    }

    async deleteDraining(id: number) {
        return this.repository.delete(id);
    }
}
