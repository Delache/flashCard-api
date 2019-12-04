/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Witnesse (témoignage)
 */
export class Witnesse {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public note!: number;
    public status!: string;
    public description!: string;
    public user_id!: number;

    constructor(input: Witnesse) {
        Object.assign(this, input);
    }
}
