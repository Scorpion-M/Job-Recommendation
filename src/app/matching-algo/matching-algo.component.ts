import { Component, OnInit } from '@angular/core';
import getPreciseDistance from 'geolib/es/getPreciseDistance';
import { CUSTOMER, DRIVERS } from '../constant/constant';
import { Vehicle } from '../Helper/Enums';
import { Customer } from '../models/customer.model';
import { Driver } from '../models/driver.model';

@Component({
  selector: 'app-matching-algo',
  templateUrl: './matching-algo.component.html',
  styleUrls: ['./matching-algo.component.scss']
})

export class MatchingAlgoComponent implements OnInit {

  customer:Customer = CUSTOMER;
  drivers:Driver[] = DRIVERS;
  nearestDriver:Driver[] = [];

  constructor() {
    
   }
  ngOnInit(): void {
    this.nearestDriver = this.findTheNearest_N_Driver(this.customer,this.drivers,2);
  }
  

  /**
   * 
   * @param {Customer} customer 
   * @param {Driver[]} drivers 
   * @param {number} numberOfDrivers 
   * @returns {Driver[]} list of nearst available driver depends on time and location of customer
   * @Descritption 
   * 1- find available driver depends on time and date of customer
   * 2- check if there are any available driver 
   * 3- sort available drivers by distance between driver location and start location of cutsomer's job
   * 4- retun N number of nearest Drivers
   */
  findTheNearest_N_Driver(customer:Customer,drivers:Driver[],numberOfDrivers:number):Driver[]{
    let nearestAvailbeDrivers:Driver[] = [];

    let availableDrivers = drivers.filter(driver =>  
      this.matchDriverDatesOrTimes(driver.availableDates,customer.date)
      && this.matchDriverDatesOrTimes(driver.availableTimes,customer.startTime));
      
      if(availableDrivers.length > 0){
        nearestAvailbeDrivers = this.sortAvailableByDistance(availableDrivers,customer);
        nearestAvailbeDrivers = this.sliceByN<Driver>(nearestAvailbeDrivers,numberOfDrivers);
      }
      
      return nearestAvailbeDrivers;
    }
    

    /**
     * 
     * @param {Date[]} datesOrTime 
     * @param {Date} customerDate 
     * @returns {boolean} true if customer date in list of driver dates list.
     * @Description check customer time/Date if equal one of the date in driver date list
     */
    matchDriverDatesOrTimes(datesOrTime:Date[],customerDate:Date):boolean{
      return datesOrTime.some(date => date.getTime() == customerDate.getTime());
    }
  /**
   * 
   * @param {Driver[]} availableDrivers 
   * @param {Customer} customer  
   * @returns {Driver[]} list of sorted driver
   * @Description compare each coordinates for each driver with coordinate of customer
   * by calcualte the distance between driver coordiante and customer start location 
   * using `getPreciseDistance` function from `geolib` package. Which is calc the distances 
   * depends on `Vincenty inverse formula`.
   */
  sortAvailableByDistance(availableDrivers:Driver[],customer:Customer):Driver[]{
    return availableDrivers.sort((driver1,driver2) => {
      if(getPreciseDistance(driver1.driverLocation,customer.startLocation) 
        > getPreciseDistance(driver2.driverLocation,customer.startLocation))
        return 1;
      else if(getPreciseDistance(driver1.driverLocation,customer.startLocation) 
            < getPreciseDistance(driver2.driverLocation,customer.startLocation)) 
        return -1;
      else 
        return 0;
    })
  }

  /**
   * 
   * @param {T} list 
   * @param {number} n 
   * @returns {T} returns N pieces from  first list to given number
   * @Description slice list from first list to giveb number
   */
  sliceByN<T>(list:T[],n:number):T[]{
    return list.slice(0,n);
  }


}
