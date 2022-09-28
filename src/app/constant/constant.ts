import { Vehicle } from "../Helper/Enums";
import { Customer } from "../models/customer.model";
import { Driver } from "../models/driver.model";

export const DRIVERS:Driver[] = [
    {
        availableDates:[new Date(2022,10,11),new Date(2022,11,12),new Date(2022,9,5),new Date(2022,8,10)],
        availableTimes:[new Date(2022,9,11,10,0),new Date(2022,7,11,11,10),new Date(2022,6,11,12,10)],
        driverLocation:{ latitude: 52.516272, longitude: 13.377722 }
      },
      {
        availableDates:[new Date(2022,10,11),new Date(2022,11,12),new Date(2022,9,5),new Date(2022,8,10)],
        availableTimes:[new Date(2022,9,11,10,0),new Date(2022,7,11,11,10),new Date(2022,6,11,12,10)],
        driverLocation:{ latitude: 51.518, longitude: 7.45425 }
      },
      {
        availableDates:[new Date(2022,10,11),new Date(2022,11,12),new Date(2022,9,5),new Date(2022,8,10)],
        availableTimes:[new Date(2022,9,11,10,0),new Date(2022,7,11,11,10),new Date(2022,6,11,12,10)],
        driverLocation:{ latitude: 51.503333, longitude: -0.119722 }
      },
      {
        availableDates:[new Date(2022,10,11),new Date(2022,11,12),new Date(2022,9,5),new Date(2022,8,10)],
        availableTimes:[new Date(2022,9,11,10,0),new Date(2022,7,11,11,10),new Date(2022,6,11,12,10)],
        driverLocation:{ latitude: 59.3275, longitude: 18.0675 }
      }
];

export const CUSTOMER:Customer = {
    date:new Date(2022,10,11),
    startTime:new Date(2022,9,11,10,0),
    jobDuration:0,
    helpers:0,
    vehicle:Vehicle.SUV,
    startLocation:{ latitude: 51.515, longitude: 7.453619 },
    endLocation:{latitude:0,longitude:0}
}
