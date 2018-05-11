import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
contacts: Boolean = false;
myStyle: object = {};
myParams: object = {};
width: Number = 100;
height: Number = 100;


hireme() {
  this.contacts = true;
}

    ngOnInit() {

this.myParams = {
            particles: {
                number: {
                    value: 20,
                },

                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                }, }
};
    }

}
