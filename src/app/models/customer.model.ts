import { GeolibInputCoordinates } from "geolib/es/types";
import { Vehicle } from "../Helper/Enums";

export class Customer {
    date:Date;
    startTime:Date;
    jobDuration:number;
    helpers:number;
    vehicle:Vehicle;
    startLocation:GeolibInputCoordinates;
    endLocation:GeolibInputCoordinates;

    constructor(
        date:Date,
        startTime:Date,
        jobDuration:number,
        helpers:number,
        vehicle:Vehicle,
        startLocation:GeolibInputCoordinates,
        endLocation:GeolibInputCoordinates
    ) {
        this.date = date;
        this.startTime = startTime;
        this.jobDuration = jobDuration;
        this.helpers = helpers;
        this.vehicle = vehicle;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        
    }

}

