
export class PersonAccount {
    public username: string;
    public password: string;
    public role: number;

    public static create(a: any): PersonAccount {
        const ret = new PersonAccount();
        ret.assign(a);
        return ret;
    }

    public assign(a: any) {
        this.username = a.username;
        this.password = a.password;
        this.role = a.role;
    }
}