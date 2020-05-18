import { Injectable } from '@angular/core';
import{InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  
  createDb(){
    const movies =[
      {id:1 , name: "movie1",description:"güzel film",imageUrl:"5.jpg"},
      {id:2 , name: "movie2",description:"güzel film",imageUrl:"5.jpg"},
      {id:3 , name: "movie3",description:"güzel film",imageUrl:"5.jpg"},
      {id:4 , name: "movie4",description:"güzel film",imageUrl:"5.jpg"},
      {id:5 , name: "movie5",description:"güzel film",imageUrl:"5.jpg"},
      {id:6 , name: "movie6",description:"güzel film",imageUrl:"5.jpg"},
      {id:7 , name: "movie7",description:"güzel film",imageUrl:"5.jpg"},
      {id:8 , name: "movie8",description:"güzel film",imageUrl:"5.jpg"},
      {id:9 , name: "movie9",description:"güzel film",imageUrl:"5.jpg"},
    ];
    return{movies} ;
  }
  constructor() { }
}
