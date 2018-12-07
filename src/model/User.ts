
export class User {

    public name: string;
    public surname: string;
    public gender: number;
    public birth_date: number;
    public phone_number: string;
    public is_active: boolean;

    public username: string;
    public password: string;
    public role: number;

    public static create(a: any): User {
        const ret = new User();
        ret.assign(a);
        return ret;
    }

    public assign(a: any) {
        this.name = a.name;
        this.surname = a.surname;
        this.gender = a.gender;
        this.phone_number = a.phone_number;
        this.birth_date = a.birth_date;
        this.is_active = a.is_active;

        this.username = a.username;
        this.password = a.password;
        this.role = a.role;
    }
}
