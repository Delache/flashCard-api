import { DbHandler } from './db.handler';

export class UserRepository {

    private GET_ALL = 'SELECT * FROM user;';

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

    // findById(id: number) {
    //     // votre code ici
    // }

    save(user: any) {
        // votre code ici
    }
}
