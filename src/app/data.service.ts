import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {
private CardsData = new BehaviorSubject([


  {
  headingOne:'Cooling System Service',
    headingtwo:'$20 Off',
    listone:'Cooling System Pressure Check',
    listtwo:'Inspection Of Belts',
    listthree:'New Coolant'
},

]);
  currentData = this.CardsData.asObservable();

  constructor() {}
  changeData( Data: any ) {
    this.CardsData.next(Data);
  }
}
