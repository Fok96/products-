import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public string1:string="" 

  public num:number=0;
  public increaseNumber():any {
    this.num=this.num+1;

}  
  public decreaseNumber():any {
    this.num=this.num-1;

}
}