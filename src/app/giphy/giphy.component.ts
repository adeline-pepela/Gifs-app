import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpServiceService } from '../http-service.service';
import { Giphy } from '../giphy';
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
  // providers: [ HttpServiceService ]
})
export class GiphyComponent implements OnInit {
  giphys: any[] = []; 
  // any data
  // data: any;
  constructor(private httpClient: HttpClient) { }

  // creating a function to the gif
  getGif():any{
    this.httpClient
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=uSwvPNS4jndTBT63u1A3VZLwVQTXJkai&limit=10&rating=g`)
    .subscribe((data)=>{
      data
      this.giphys=data.data;
    },)
  }


  ngOnInit():void {
this.getGif()

    // this.searchGiphy('smile')
  }

}
