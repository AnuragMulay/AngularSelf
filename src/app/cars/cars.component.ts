import {Component} from '@angular/core'

@Component ({
    selector:'car-Data',
    templateUrl:'/app/cars/cars.component.html',
    styleUrls:['/app/cars/cars.component.css']
})
export class CarComponent {
    name:String = "Civic";
    brand:String = "Honda";
    inventory:String = "37";
}