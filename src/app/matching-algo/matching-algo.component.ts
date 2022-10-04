import { HELPERS } from './../constant/constant';
import { Component, OnInit } from '@angular/core';
import getPreciseDistance from 'geolib/es/getPreciseDistance';
import { CUSTOMER, DRIVERS } from '../constant/constant';
import { Customer } from '../models/customer.model';
import { Driver } from '../models/driver.model';
import { Helper } from '../models/helper.model';

@Component({
  selector: 'app-matching-algo',
  templateUrl: './matching-algo.component.html',
  styleUrls: ['./matching-algo.component.scss']
})

export class MatchingAlgoComponent implements OnInit {

  customer:Customer = CUSTOMER;
  drivers:Driver[] = DRIVERS;
  helpers:Helper[] = HELPERS;
  nearestDrivers:Driver[] = [];
  nearestHelpers:Driver[] = [];

  constructor() {
    
   }
  ngOnInit(): void {
    this.nearestDrivers = this.findTheNearest_N_Driver_Helper(this.customer,this.drivers,2);
    this.nearestHelpers = this.findTheNearest_N_Driver_Helper(this.customer,this.helpers,this.customer.helpers);
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
  findTheNearest_N_Driver_Helper(customer:Customer,drivers:(Driver|Helper)[],numberOfDrivers:number):(Driver|Helper)[]{
    let nearestAvailbeDrivers:Driver[] = [];
    debugger
    let availableDrivers = drivers.filter(driver =>
       
      this.matchDriverOrHelperTime(driver,customer) 
      && this.matchDriverOrHelperDate(driver.availableDate,customer.jobDate) 
      && customer.vehicle == driver.vehicleSize
      );
      
      if(availableDrivers.length > 0){
        nearestAvailbeDrivers = this.sortAvailableByDistance(availableDrivers,customer);
        nearestAvailbeDrivers = this.sliceByN<Driver|Helper>(nearestAvailbeDrivers,numberOfDrivers);
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
    matchDriverOrHelperDate(helperOrDriverDate:Date,customerDate:Date):boolean{
      return helperOrDriverDate.getTime() == customerDate.getTime();
    }

    /**
     * 
     * @param {Driver | Helper} helperOrDriver 
     * @param {Customer} customer 
     * @returns {boolean} 
     * @Description check jobStartTime for customer and add  jobDuration to startTime,
     * in order to know the time need to do the job, then the time should be greater than or equal 
     * to start shift of helper or driver or less than or equal end shift of helper or driver
     */
    matchDriverOrHelperTime(helperOrDriver:Driver | Helper,customer:Customer):boolean{
      let jobDurationTime = new Date(customer.JobStartTime);
      jobDurationTime.setMinutes(customer.jobDuration)
      
      return (helperOrDriver.startAvailableTime.getTime() <= jobDurationTime.getTime()
      && helperOrDriver.endAvailableTime.getTime() >= jobDurationTime.getTime())
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
