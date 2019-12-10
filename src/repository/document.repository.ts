import { Document } from './../models/document';
import { DbHandler } from './db.handler';

export class DocumentRepository {

    private GET_ALL = 'SELECT * FROM document;';
    private GET_BY_ID = 'SELECT * FROM document where id =';
    // compléter la commande sql ci-dessous correspondant au put dans la table document
    private PUT_BY_ID = 'INSERT INTO table document (type, description, link)';

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

    async save(document: Document) {
        // votre code ici
        const upDoc = await this.db.query(this.PUT_BY_ID + 'values(' + document.type, document.description + ')');
        // vérifier l'utilité du return ci dessous !
        return upDoc;
    }
}
