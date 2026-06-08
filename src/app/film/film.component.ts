import { Component, ElementRef, ViewChild } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FilmModel } from '../models/film-model';
import { FilmService } from '../services/film-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  safeTrailerUrl!: SafeResourceUrl;
  openedTrailer: boolean = false;

  @ViewChild('popupImage') popupImage!: ElementRef<HTMLDialogElement>;

  @ViewChild('popupTrailer') popupTrailer!: ElementRef<HTMLDialogElement>;
  
  userHasSnapped!: boolean;

  constructor(private filmService: FilmService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.film.trailerUrl);
    this.userHasSnapped = false;
  }

  openImage(): void {
    this.popupImage.nativeElement.showModal();
  }

  closeImage(): void {
    this.popupImage.nativeElement.close();
  }

  onTrailer(){
    this.openedTrailer = true;
    this.popupTrailer.nativeElement.showModal();
  }

  closeTrailer(){
    this.openedTrailer = false;
    this.popupTrailer.nativeElement.close();
  }


}
