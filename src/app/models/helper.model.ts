import { GeolibInputCoordinates } from "geolib/es/types";
import { Vehicle } from "../Helper/Enums";
import { Driver } from "./driver.model";

export class Helper extends Driver {
    /**
     *
     */
    constructor(
        id:string,
        availableDate:Date,
        startAvailableTime:Date,
        endAvailableTime:Date,
        vehicleSize:Vehicle,
        driverLocation:GeolibInputCoordinates) {
            
        super(id,availableDate,startAvailableTime,endAvailableTime,vehicleSize,driverLocation);
        
    }    
}