import { Component, ElementRef, ViewChild } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FilmModel } from '../models/film-model';
import { FilmService } from '../services/film-service';

@Component({
  selector: 'app-film',
  imports: [
    NgClass,
    UpperCasePipe,
  ],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit{
    
  @Input() film!: FilmModel;

  @ViewChild('maPopup') popup!: ElementRef<HTMLDialogElement>;
  
  userHasSnapped!: boolean;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
      this.userHasSnapped = false;
  }

  openImage(): void {
    this.popup.nativeElement.showModal();
  }

  closeImage(): void {
    this.popup.nativeElement.close();
  }


}
