import {Aim} from './Aim';
import {GeoTarget} from './GeoTarget';


export class Offer {
    public Id: number;
    public Name: string;
    public Description: string;
    public Aims: Aim[];
    public GeoTargets: GeoTarget[];
    public LvelId: number;
    public MinLevel: number;
    public IsActive: boolean;
    public StartDate : Date;
    public FinishDate  : Date;

}
