import {Country} from './Country';
import {City} from './City';

export class GeoTarget {
    public Id : number;
    public CountryId : number;
    public CityId : number;

    public country : Country;
    public city    : City;
}