
export class Webmaster {
    public user_id: number;
    public level_id: number;
    // public company: string;
    // public site: string;

    public static create(a: any): Webmaster {
        const ret = new Webmaster();
        ret.assign(a);
        return ret;
    }

    public assign(a: any) {
        this.user_id = a.user_id;
        this.level_id = a.level_id;
        // this.company = a.company;
        // this.site = a.site;
    }
}