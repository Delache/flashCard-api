import { DbHandler } from './db.handler';

export class DrainingRepository {

    private GET_ALL = 'SELECT * FROM draining;';
    private GET_BY_ID = 'SELECT * FROM draining where id =';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const draining = await this.db.query(this.GET_BY_ID + id);
        return draining;
    }

    save(draining: any) {
        // votre code ici
    }
}
