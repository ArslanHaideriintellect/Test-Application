import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FooterService {
constructor(private http: HttpClient) {}
storeEmail(Input:any[]) {
  return this.http.post('https://procar-car.firebaseio.com/data.json', Input);

}
}
