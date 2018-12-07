
export class User {

    public gender_id: number;
    public role_id: number;
    public login: string;
    public password: string;

    public name: string;
    public surname: string;

    public birth_date: string;
    public phone_number: string;
    public is_active: boolean;

    public static create(a: any): User {
        const ret = new User();
        ret.assign(a);
        return ret;
    }

    public assign(a: any) {
        this.name = a.name;
        this.surname = a.surname;
        this.gender_id = a.gender_id;
        this.phone_number = a.phone_number;
        this.birth_date = a.birth_date;
        this.is_active = a.is_active;

        this.login = a.login;
        this.password = a.password;
        this.role_id = a.role;
    }
}
