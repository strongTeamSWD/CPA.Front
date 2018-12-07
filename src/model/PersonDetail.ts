import {PersonAccount} from './PersonAccount';

export class PersonDetail {

    public username: string;
    public password: string;
    public role: number;

    public static create(a: any): PersonDetail {
        const ret = new PersonDetail();
        ret.assign(a);
        return ret;
    }

    public assign(a: any) {
        this.username = a.username;
        this.password = a.password;
        this.role = a.role;
    }
}
