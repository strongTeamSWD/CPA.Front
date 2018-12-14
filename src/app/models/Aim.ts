export class Aim {
    public id: number;

    public offerID : number;
    public name  : string;
    public payment : number;
    public processingDays : number;
    public postClickDays  : number;
    public acceptRate : number;


    constructor(id: number, offerID: number, name: string, payment: number, processingDays: number, postClickDays: number, acceptRate: number) {
        this.id = id;
        this.offerID = offerID;
        this.name = name;
        this.payment = payment;
        this.processingDays = processingDays;
        this.postClickDays = postClickDays;
        this.acceptRate = acceptRate;
    }
}