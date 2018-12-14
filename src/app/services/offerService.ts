import {Injectable} from '@angular/core';
import {HttpService} from './HttpService';
import {Offer} from '../models/Offer';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {HttpResponseTypes} from '../variables/HttpResponseTypes';
import {Aim} from '../models/Aim';
import {GeoTarget} from '../models/GeoTarget';
import {Country} from '../models/Country';
import {City} from '../models/City';

@Injectable()
export class OfferService {

    offerslist : Offer[] = [];



    constructor(private httpService : HttpService)
    {
        //offerID : 1, name: "qq", payment: 10, processingDays: 5, postClickDays: 10, acceptRate: 1
        let aims = [new Aim(1, 1, 'one', 10, 30, 5, 1),
            new Aim(2, 1, 'one', 10, 30, 5, 1),];
        let geotarget = [new GeoTarget(1, 1, 1, new Country(1, 'Kazakhstan'), new City(1, 'Almaty')),
            new GeoTarget(2, 1, 2, new Country(1, 'Kazakhstan'), new City(2, 'Astana'))]
        this.offerslist = [new Offer(1, 'one', 'first', aims, geotarget, 1, 1, true, new Date(), new Date()),
            new Offer(2, 'two', 'second', aims, geotarget, 1, 1, true, new Date(), new Date())]
    }

    createOffer(newOffer : Offer){
        let param = {
            offer : JSON.stringify(newOffer)
        };

       return this.httpService.post(SERVER_API_URL.CREATE_OFFER,param,HttpResponseTypes.JSON);
    }

    loadAllOffers(){
        console.log("LOADING OFFERS")
        this.getAllOffers().toPromise().then(res=>{
            if(res.body)
            {
                this.offerslist = res.body;
            }
        }).catch(err=>{console.error(err)});
    }

    loadOfferById(id: number){
        console.log("LOADING OFFER BY ID")
        this.getOfferById(id).toPromise().then(res=>{
            if(res.body)
            {
                return res.body;
            }
        }).catch(err=>{console.error(err)});
        return null;
    }

    private getAllOffers(){
       return this.httpService.get(SERVER_API_URL.GET_ALL_OFFERS);
    }

    private getOfferById(id : number){
        let param = {
            id : id
        };

        return this.httpService.get(SERVER_API_URL.GET_OFFER_BY_ID,param,HttpResponseTypes.JSON);
    }

    deleteOffers(offer : Offer){
        let param = {
          offer : offer
        };

        return this.httpService.get(SERVER_API_URL.DELETE_OFFER_BY_ID,param);
    }

}