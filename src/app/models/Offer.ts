import {Aim} from './Aim';
import {GeoTarget} from './GeoTarget';


export class Offer {
    public id: number;
    public name: string;
    public description: string;
    public aims: Aim[];
    public geoTargets: GeoTarget[];
    public lvelId: number;
    public minLevel: number;
    public isActive: boolean;
    public startDate : Date;
    public finishDate  : Date;


    constructor(id: number, name: string, description: string, aims: Aim[], geoTargets: GeoTarget[], lvelId: number, minLevel: number, isActive: boolean, startDate: Date, finishDate: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.aims = aims;
        this.geoTargets = geoTargets;
        this.lvelId = lvelId;
        this.minLevel = minLevel;
        this.isActive = isActive;
        this.startDate = startDate;
        this.finishDate = finishDate;
    }
}
