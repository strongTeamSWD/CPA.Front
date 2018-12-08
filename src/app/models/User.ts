
export class User {

    public gender_id: number;
    public roleId: number;
    public login: string;
    public password: string;

    public name: string;
    public surname: string;

    public birth_date: string;
    public phoneNumber: string;
    public isActive: boolean;
    public email : string;
    

    public static create(a: any): User {
        const ret = new User();
        ret.assign(a);
        return ret;
    }

    public assign(a: any) {
        this.name = a.name;
        this.surname = a.surname;
        this.gender_id = a.gender_id;
        this.phoneNumber = a.phoneNumber;
        this.birth_date = a.birth_date;
        this.isActive = a.isActive;

        this.login = a.login;
        this.password = a.password;
        this.roleId = a.role;
    }
}
