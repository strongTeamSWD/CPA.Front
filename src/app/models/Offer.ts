
export class Offer {

    public id: number;
    public offer_id: number;
    public name: string;
    public payment: number;
    public process_in_days: number;
    public post_click_days: number;
    public accept_rate: number;


    public assign(a: any) {
        this.name = a.name;
        this.id = a.id;
        this.offer_id = a.offer_id;
        this.payment = a.payment;
        this.process_in_days = a.process_in_days;
        this.post_click_days = a.post_click_days;
        this.accept_rate = a.accept_rate;
    }
}
