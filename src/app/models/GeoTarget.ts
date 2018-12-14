import {Country} from './Country';
import {City} from './City';

export class GeoTarget {
    public Id : number;
    public CountryId : number;
    public CityId : number;

    public country : Country;
    public city    : City;


    constructor(Id: number, CountryId: number, CityId: number, country: Country, city: City) {
        this.Id = Id;
        this.CountryId = CountryId;
        this.CityId = CityId;
        this.country = country;
        this.city = city;
    }
}