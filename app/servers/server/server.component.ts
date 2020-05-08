import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverId:number;
  constructor(private serversService: ServersService,
    private route:ActivatedRoute,private router:Router) { 
     // this.serverId=this.route.snapshot.params['id'];
    }
   
  ngOnInit() {

    this.route.data.subscribe((data:Data)=>{
       this.server=data['server'];
    });
    // this.serverId=parseInt(this.route.snapshot.params['id']);
    // this.server = this.serversService.getServer(this.serverId);
    // this.route.params.subscribe((params:Params)=>{
    //   this.server = this.serversService.getServer(parseInt(params['id']));
    // });
   
  }

  onEdit(){
  //  this.router.navigate(['/servers',this.serverId,'edit'],
  //  {queryParams:{allowEdit:true},fragment:'loading'});
   //the above navigation is similar to

   this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});

  }

}
