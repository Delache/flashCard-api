import { DrainingRequestRepository } from '../repository/draining-request.repository';

export class DrainingRequestService {

    private repository: DrainingRequestRepository;
    constructor() {
        this.repository = new DrainingRequestRepository();
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
