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
    aims: Aim[] = [];
    geotarget: GeoTarget[] = [];
    index: number = 0;
    geoTargetList: GeoTarget[] = [];
    aimList: string[] = [];



    constructor(private httpService : HttpService)
    {
        }

    createOffer(newOffer : Offer){
        // пока что фейк
        this.loadAllOffers();
        this.offerslist.push(newOffer);

        console.log('Offers:', this.offerslist);



       //  let param = {
       //      offer : JSON.stringify(newOffer)
       //  };
       // return this.httpService.post(SERVER_API_URL.CREATE_OFFER,param,HttpResponseTypes.JSON);
    }

    loadAllOffers(){
        // пока что фейк
        if(this.offerslist.length == 0){
            this.aims.push(new Aim(1, 1, 'one', 10, 30, 5, 1));
            this.aims.push(new Aim(2, 1, 'one', 10, 30, 5, 1));
            this.geotarget.push(new GeoTarget(1, 1, 1, new Country(1, 'Kazakhstan'), new City(1, 'Almaty')));
            this.geotarget.push(new GeoTarget(2, 1, 2, new Country(1, 'Kazakhstan'), new City(2, 'Astana')));
            this.offerslist.push(new Offer(this.index++, 'one', 'first',  this.aims, this.geotarget, 1, 1, true, null, new Date()));
            this.offerslist.push(new Offer(this.index++, 'two', 'second', this.aims, this.geotarget, 1, 1, true, null, new Date()));
        }
        //потом удалить




        // console.log("LOADING OFFERS")
        // this.getAllOffers().toPromise().then(res=>{
        //     if(res.body)
        //     {
        //         this.offerslist = res.body;
        //     }
        // }).catch(err=>{console.error(err)});
    }

    loadOfferById(id: number){
        // пока что фейк
        this.loadAllOffers();
        for(let offer of this.offerslist){
            if(offer.id == id) {
                return offer;
            }
        }
        return null;
        //потом удалить




        // console.log("LOADING OFFER BY ID")
        // this.getOfferById(id).toPromise().then(res=>{
        //     if(res.body)
        //     {
        //         return res.body;
        //     }
        // }).catch(err=>{console.error(err)});
        // return null;
    }

    loadAllGeoTargetList(){
        // пока что фейк
        this.geoTargetList.push(new GeoTarget(1, 1, 1, new Country(1, 'Kazakhsten'), new City(1, 'Almaty')))
        this.geoTargetList.push(new GeoTarget(2, 1, 2, new Country(1, 'Kazakhsten'), new City(2, 'Astana')))
        this.geoTargetList.push(new GeoTarget(3, 2, 3, new Country(2, 'Russsia'), new City(3, 'Moscow')))
        this.geoTargetList.push(new GeoTarget(4, 2, 4, new Country(2, 'Russsia'), new City(4, 'Saint Petersburg')))
        this.geoTargetList.push(new GeoTarget(5, 3, 5, new Country(3, 'Malaysia'), new City(5, 'Kuala Lumpur')))
        this.geoTargetList.push(new GeoTarget(6, 4, 6, new Country(4, 'China'), new City(6, 'Shanghai')))
        this.geoTargetList.push(new GeoTarget(7, 5, 7, new Country(5, 'Turkey'), new City(7, 'Istanbul')))
        this.geoTargetList.push(new GeoTarget(8, 6, 8, new Country(6, 'India'), new City(8, 'Delhi')))
        this.geoTargetList.push(new GeoTarget(9, 6, 9, new Country(6, 'India'), new City(9, 'Mumbai')))
        this.geoTargetList.push(new GeoTarget(10, 7, 10, new Country(7, 'Japan'), new City(10, 'Tokyo')))
        this.geoTargetList.push(new GeoTarget(11, 8, 11, new Country(8, 'South Korea'), new City(11, 'Seoul')))
        this.geoTargetList.push(new GeoTarget(12, 9, 12, new Country(9, 'United Kingdom'), new City(12, 'London')))
        this.geoTargetList.push(new GeoTarget(13, 10, 13, new Country(10, 'Argentina'), new City(13, 'Buenos Aires')))

        return this.geoTargetList;
        //потом удалить
        //TODO брать данные с базы нужно


    }
    loadAllAimList(){
        // пока что фейк
        /*
        Submitted order
        Confirmed purchase order
        Paid order
        Request submitted
        Confirmed request
        Registration on-line
        Registration in the game
        Adding funds to the account
        Watching video
        Active player
        Purchase coupon
        Install Application for iOs
        Install application for Android
        Application Install to Windows Phone
        Achievement level
        First game login
        In-app purchase
        Subscription
        In-app event
        Click
        Click-out
        Targeted all
        Request for call
        Other types
         */
        this.aimList.push('Submitted order');
        this.aimList.push('Confirmed purchase order');
        this.aimList.push('Paid order');
        this.aimList.push('Request submitted');
        this.aimList.push('Confirmed request');
        this.aimList.push('Registration on-line');
        this.aimList.push('Registration in the game');
        this.aimList.push('Adding funds to the account');
        this.aimList.push('Watching video');
        this.aimList.push('Active player');
        this.aimList.push('Purchase coupon');
        this.aimList.push('Install Application for iOs');
        this.aimList.push('Install application for Android');
        this.aimList.push('Application Install to Windows Phone');
        this.aimList.push('First game login');
        this.aimList.push('In-app purchase');
        this.aimList.push('Subscription');
        this.aimList.push('In-app event');
        this.aimList.push('Click');
        this.aimList.push('Click-out');
        this.aimList.push('Targeted all');
        this.aimList.push('Request for call');
        this.aimList.push('Other types');
        return this.aimList;
        //потом удалить
        //TODO брать данные с базы нужно


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