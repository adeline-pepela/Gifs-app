import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // searchIt:string;
  @Output() emitSearch = new EventEmitter<any>()
  searchIt:any;
  constructor() { }
  search(){
    // console.log(this.searchIt)
    this.emitSearch.emit(this.searchIt);
  }

  ngOnInit(): void {
  }

}
