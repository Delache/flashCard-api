import { OccupantRepository } from '../repository/occupant.repository';

export class OccupantService {

    private repository: OccupantRepository;
    constructor() {
        this.repository = new OccupantRepository();
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
