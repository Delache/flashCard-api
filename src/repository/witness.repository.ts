import { DbHandler } from './db.handler';

export class WitnessRepository {

    private GET_ALL = 'SELECT * FROM witness;';
    private GET_BY_ID = 'SELECT * FROM witness where id =';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const witness = await this.db.query(this.GET_BY_ID + id);
        return witness;
    }

    save(witness: any) {
        // votre code ici
    }
}
