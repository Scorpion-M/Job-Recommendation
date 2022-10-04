import { Vehicle } from './../Helper/Enums';
import { GeolibInputCoordinates } from "geolib/es/types";
import { BaseModel } from './base.model';

export class Driver extends BaseModel{
    availableDate:Date;
    startAvailableTime:Date;
    endAvailableTime:Date;
    vehicleSize:Vehicle;
    driverLocation:GeolibInputCoordinates;

    constructor(
        id:string,
        availableDate:Date,
        startAvailableTime:Date,
        endAvailableTime:Date,
        vehicleSize:Vehicle,
        driverLocation:GeolibInputCoordinates,
    ) {
        super(id)
        this.availableDate = availableDate;
        this.startAvailableTime = startAvailableTime;
        this.endAvailableTime = endAvailableTime;
        this.vehicleSize = vehicleSize;
        this.driverLocation = driverLocation;
    }


}