import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit() {
  }
  
  loadServer(id:number){
    //to navigate relative to particular path
   // this.router.navigate(['/servers'],{relativeTo:this.route})
   this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:1},fragment:'loading'});
  }

  onLogin(){
   this.authService.login();
  }
  onLogout(){
   this.authService.logout();
  }
}
