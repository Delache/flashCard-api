import { DrainingRepository } from '../repository/draining.repository';

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

}
