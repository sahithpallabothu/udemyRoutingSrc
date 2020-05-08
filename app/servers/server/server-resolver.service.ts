import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';

interface Server{
    id:number;
    name:string;
    status:string
}

@Injectable({
    providedIn:'root'
})
export class ServiceResolver implements Resolve<Server>{
    constructor(private serverService:ServersService){}
    resolve(route:ActivatedRouteSnapshot
        ,state:RouterStateSnapshot):Observable<Server> | Promise<Server> | Server
        {
          const id=parseInt(route.params['id']);
          return this.serverService.getServer(id);
        }

}