import { HomeRepository } from '../repository/home.repository';
import { Home } from '../models/home';

export class HomeService {

    private repository: HomeRepository;
    constructor() {
        this.repository = new HomeRepository();
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

    async create(home: Home) {
        return this.repository.save(home);
    }

    async modifyHome(home: Home, id: number) {
        return this.repository.modify(home, id);
    }

    async deleteHome(id: number) {
        return this.repository.delete(id);
    }

}
