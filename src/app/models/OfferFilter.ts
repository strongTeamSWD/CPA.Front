import {GeoTarget} from './GeoTarget';


export class OfferFilter {
    public keyword : string;
    public geoTargets : GeoTarget[];
    public startDate : Date;
    public finishDate : Date;
    public aimList : string[];


    // constructor(keyword: string, geoTargets: GeoTarget[], startDate: Date, finishDate: Date) {
    //     this.keyword = keyword;
    //     this.geoTargets = geoTargets;
    //     this.startDate = startDate;
    //     this.finishDate = finishDate;
    // }
}
