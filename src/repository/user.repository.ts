import { DbHandler } from './db.handler';

export class UserRepository {

    private GET_ALL = 'SELECT * FROM user;';
    private GET_BY_ID = 'SELECT * FROM user where id =';

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
        const user = await this.db.query(this.GET_BY_ID + id);
        return user;
    }

    save(user: any) {
        // votre code ici

    }
}
