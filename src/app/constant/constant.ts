import { Vehicle } from "../Helper/Enums";
import { Customer } from "../models/customer.model";
import { Driver } from "../models/driver.model";
import { Helper } from "../models/helper.model";

export const DRIVERS:Driver[] = [
    {
        id:"Drvier_1",  
        availableDate:new Date(2022,9,30),
        startAvailableTime:new Date(2022,9,30,9,30),
        endAvailableTime:new Date(2022,9,30,11,0),
        vehicleSize:Vehicle.SUV,
        driverLocation:{ latitude: 51.518, longitude: 7.45425 }
      },
      {
        id:"Driver_2",  
        availableDate:new Date(2022,9,29),
        startAvailableTime:new Date(2022,9,29,9,30),
        endAvailableTime:new Date(2022,9,29,11,0),
        vehicleSize:Vehicle.van,
        driverLocation:{ latitude: 52.516272, longitude: 13.377722 }
      },    
      {
        id:"Driver_3",  
        availableDate:new Date(2022,10,1),
        startAvailableTime:new Date(2022,10,1,9,30),
        endAvailableTime:new Date(2022,10,1,11,0),
        vehicleSize:Vehicle.SUV,
        driverLocation:{ latitude: 59.3275, longitude: 18.0675 }
      },    
      {
        id:"Driver_4",  
        availableDate:new Date(2022,9,30),
        startAvailableTime:new Date(2022,9,30,9,30),
        endAvailableTime:new Date(2022,9,30,11,0),
        vehicleSize:Vehicle.truck,
        driverLocation:{ latitude: 51.503333, longitude: -0.119722 }
      },
      {
        id:"Driver_5",  
        availableDate:new Date(2022,9,30),
        startAvailableTime:new Date(2022,9,30,9,30),
        endAvailableTime:new Date(2022,9,30,11,0),
        vehicleSize:Vehicle.SUV,
        driverLocation:{ latitude: 52.506272, longitude: 10.377722 } 
      },
];
export const HELPERS:Helper[] = [
    {
        id:"Helper_1",  
        availableDate:new Date(2022,9,30),
        startAvailableTime:new Date(2022,9,30,9,30),
        endAvailableTime:new Date(2022,9,30,11,30),
        vehicleSize:Vehicle.SUV,
        driverLocation:{ latitude: 51.518, longitude: 7.45425 }
      },
      {
        id:"Helper_2",  
        availableDate:new Date(2022,9,30),
        startAvailableTime:new Date(2022,9,30,8,30),
        endAvailableTime:new Date(2022,9,30,10,30),
        vehicleSize:Vehicle.van,
        driverLocation:{ latitude: 51.503333, longitude: -0.119722 }
      },    
      {
        id:"Helper_3",  
        availableDate:new Date(2022,9,30),
        startAvailableTime:new Date(2022,9,30,9,30),
        endAvailableTime:new Date(2022,9,30,11,30),
        vehicleSize:Vehicle.truck,
        driverLocation:{ latitude: 59.3275, longitude: 18.0675 }
      }
  ]

export const CUSTOMER:Customer = {
    id:"1",
    jobDate:new Date(2022,9,30),
    JobStartTime:new Date(2022,9,30,10,0),
    jobDuration:60,
    helpers:1,
    vehicle:Vehicle.truck,
    startLocation:{ latitude: 50.5040, longitude: 20.3040 },
    endLocation:{latitude:0,longitude:0}
}
