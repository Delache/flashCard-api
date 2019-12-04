import { DbHandler } from './db.handler';

export class HomeRepository {

    private GET_ALL = 'SELECT * FROM home;';
    private GET_BY_ID = 'SELECT * FROM home where id =';

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
        const home = await this.db.query(this.GET_BY_ID + id);
        return home;
    }

    save(home: any) {
        // votre code ici
    }
}
