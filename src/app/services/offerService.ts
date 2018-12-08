import {Injectable} from '@angular/core';
import {HttpService} from './HttpService';
import {Offer} from '../models/Offer';
import {SERVER_API_URL} from '../variables/SERVER_API_URL';
import {HttpResponseTypes} from '../variables/HttpResponseTypes';

@Injectable()
export class OfferService {

    offerslist : Offer[] = [];

    constructor(private httpService : HttpService)
    {}

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