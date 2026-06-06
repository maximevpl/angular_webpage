import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FilmModel } from '../models/film-model';
import { FilmService } from '../services/film-service';

@Component({
  selector: 'app-film',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit{
    
  @Input() film!: FilmModel;


  snapButtonText!: string;
  userHasSnapped!: boolean;
  myPrice:number= 336.75;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
      this.snapButtonText ='Oh snap!';
      this.userHasSnapped = false;
  }
/*
  onSnap():void{
    if (this.userHasSnapped){
      this.unsnap();
    }else{
      this.snap();
    }
  }
  unsnap(){
      // this.faceSnapsService.snapFaceSnapById(this.film.id, 'unsnap');
      this.snapButtonText='Oh Snap!';
      this.userHasSnapped=false;
  }
  snap(){
      // this.faceSnapsService.snapFaceSnapById(this.film.id, 'snap');
      this.snapButtonText='Ooops, unSnap!';
      this.userHasSnapped=true;
  }
      */

}
