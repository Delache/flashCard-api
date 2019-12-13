import { EventRepository } from '../repository/event.repository';
export class EventService {

    private repository: EventRepository;
    constructor() {
        this.repository = new EventRepository();
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
