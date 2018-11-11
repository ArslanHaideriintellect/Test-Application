import {Component, ElementRef, OnInit,OnChanges} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {FooterService} from './footer.service';
import {Response} from 'selenium-webdriver/http';
// import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   // Input = [ ];
 formData = [{

 }]

  constructor( private footerService: FooterService) { }

  ngOnInit() {
  }
  onSubmit( form: NgForm ) {
    console.log(form);
    // // this.formData = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
    // this.http.post("http://www.testtttt.com", body).subscribe((data) => {});
  }
  onSaveInput(){
    this.footerService.storeEmail(this.formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onAddEmail(email: string) {
    this.formData.push({
      email: email,
    });
    console.log(this.formData);
  }
}

