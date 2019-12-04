import { DbHandler } from './db.handler';

export class OccupantRepository {

    private GET_ALL = 'SELECT * FROM occupant;';
    private GET_BY_ID = 'SELECT * FROM occupant where id =';

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
        const occupant = await this.db.query(this.GET_BY_ID + id);
        return occupant;
    }

    save(occupant: any) {
        // votre code ici
    }
}
