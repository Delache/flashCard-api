/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet user
 */
export class User {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public firstname!: string;
    public lastname!: string;
    public username!: string;
    public password!: string;
    public avatar!: string;
    public class!: string;

    constructor(input: User) {
        Object.assign(this, input);
    }
}
