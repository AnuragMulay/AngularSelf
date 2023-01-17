import {Component} from '@angular/core'

@Component ({
    selector:'my-app',
    template:`<div>
                <h1>{{header}}</h1>
                <car-Data></car-Data>
            </div>`
})
export class AppComponent {
    header:String = "Car Details";
}