import { Draining } from './../models/draining';
import { DbHandler } from './db.handler';

export class DrainingRepository {

    private GET_ALL = 'SELECT * FROM draining;';
    private GET_BY_ID = 'SELECT * FROM draining where id = ?';
    private POST_BY_ID = 'INSERT INTO draining SET ?';
    private PUT_BY_ID = 'UPDATE draining SET ? WHERE id = ?';
    private DEL_BY_ID = 'DELETE FROM draining WHERE id = ?';
    // ajouter une requete de sélection par date

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const draining = await this.db.query(this.GET_BY_ID , id);
        return draining;
    }

    async save(draining: Draining) {
        const postDraining = await this.db.query(this.POST_BY_ID, draining);
        return postDraining;
    }

    async modify(draining: Draining, id: number) {
        const modifyDraining = await this.db.query(this.PUT_BY_ID, [draining, id]);
        return modifyDraining;
    }

    async delete(id: number) {
        const deleteDraining = await this.db.query(this.DEL_BY_ID , id);
        return deleteDraining;
    }
}
