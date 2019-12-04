import { DbHandler } from './db.handler';

export class EventRepository {

    private GET_ALL = 'SELECT * FROM evente;';
    private GET_BY_ID = 'SELECT * FROM evente where id =';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        // this.db.query(this.GET_ALL).then((reust) => {
        //     console.log(reust);
        // });

        // Ou alors on peut ecrire =>

        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const event = await this.db.query(this.GET_BY_ID + id);
        return event;
    }

    save(event: any) {
        // votre code ici
    }
}
