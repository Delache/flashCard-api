import { DbHandler } from './db.handler';

export class DocumentRepository {

    private GET_ALL = 'SELECT * FROM document;';
    private GET_BY_ID = 'SELECT * FROM document where id =';

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
        const document = await this.db.query(this.GET_BY_ID + id);
        return document;
    }

    save(document: any) {
        // votre code ici
    }
}
