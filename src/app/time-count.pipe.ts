import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    var dateDifference =Math.abs(value-today )// returns value in milliseconds
    const secondsInAMinute= 3600; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var dateCounter = Math.round(dateDifferenceSeconds/secondsInAMinute);

    if (dateCounter >= 1){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
