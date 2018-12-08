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

}
