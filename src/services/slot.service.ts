import { SlotRepository } from '../repository/slot.repository';
import { Slot } from '../models/slot';

export class SlotService {

    private repository: SlotRepository;
    constructor() {
        this.repository = new SlotRepository();
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

    signUp(slot: Slot) {
        return this.repository.save(slot);
    }

}
