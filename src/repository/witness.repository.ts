import { DbHandler } from './db.handler';

export class WitnessRepository {

    private GET_ALL = 'SELECT * FROM witnesse;';
    private GET_BY_ID = 'SELECT * FROM witnesse where id =';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        // this.db.query(this.GET_ALL).then((result) => {
        //     console.log(result);
        // });

        // Ou alors on peut ecrire =>

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
