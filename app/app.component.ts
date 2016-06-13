import {Component} from 'angular2/core';
import {RouteConfig,Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { MainPageComponent } from './home/home.component';
import { LoginComponent}  from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchRoomsComponent } from './searchrooms/searchrooms.component';
import { AddRoomComponent } from './addroom/addroom.component';
import { AddHotelComponent } from './addhotel/addhotel.component';

@Component({
    selector: 'my-app',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'./',    name: 'Home',   component: MainPageComponent, useAsDefault: true},
  {path:'./login', name:'Login', component: LoginComponent},
  {path:'./register', name:'Register', component: RegistrationComponent},
  {path:'./searchrooms', name:'SearchRooms', component: SearchRoomsComponent},
  {path:'./addroom', name:'AddRoom', component: AddRoomComponent},
  {path:'./addhotel', name:'AddHotel', component: AddHotelComponent},
])

export class AppComponent { 
	router: Router;
	
	constructor(router: Router) {
		this.router = router;
	}
	
}
