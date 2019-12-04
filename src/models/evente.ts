/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Evente (évenement)
 */
export class Evente {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public quantity!: string;
    public type!: string;
    public author!: string;
    public date!: string;
    public description!: string;
    public user_id!: number;

    constructor(input: Evente) {
        Object.assign(this, input);
    }
}
