import { GeolibInputCoordinates } from "geolib/es/types";
import { Vehicle } from "../Helper/Enums";
import { BaseModel } from "./base.model";

export class Customer  extends BaseModel{
    jobDate:Date;
    JobStartTime:Date;
    jobDuration:number; // number of minutes
    helpers:number;
    vehicle:Vehicle;
    startLocation:GeolibInputCoordinates;
    endLocation:GeolibInputCoordinates;

    constructor(
        id:string,
        jobDate:Date,
        JobStartTime:Date,
        jobDuration:number,
        helpers:number,
        vehicle:Vehicle,
        startLocation:GeolibInputCoordinates,
        endLocation:GeolibInputCoordinates
    ) {
        super(id);
        this.jobDate = jobDate;
        this.JobStartTime = JobStartTime;
        this.jobDuration = jobDuration;
        this.helpers = helpers;
        this.vehicle = vehicle;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        
    }

}

