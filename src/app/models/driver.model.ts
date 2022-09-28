import { GeolibInputCoordinates } from "geolib/es/types";

export class Driver {
    availableDates:Date[];
    availableTimes:Date[];
    driverLocation:GeolibInputCoordinates;

    constructor(
        availableDates:Date[],
        availableTimes:Date[],
        driverLocation:GeolibInputCoordinates,
    ) {
        
        this.availableDates = availableDates;
        this.availableTimes = availableTimes;
        this.driverLocation = driverLocation;
    }


}