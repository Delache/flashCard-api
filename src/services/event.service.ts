
import { Event } from './../models/event';
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

    // upload du Event
    async upload(event: Event) {
        return this.repository.save(event);
    }

    // modification du Event
    async modifyEvent(event: Event, id: number) {
        return this.repository.modifyEvent(event, id);
    }

    // suppression du Event
    async deleteEvent(id: number) {
        return this.repository.deleteEvent(id);
    }

}
