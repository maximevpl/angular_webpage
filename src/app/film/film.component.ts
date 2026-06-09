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
    DatePipe
  ],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit{
    
  @Input() film!: FilmModel;
  safeTrailerUrl!: SafeResourceUrl;
  openedTrailer: boolean = false;
  private scrollPosition: number = 0;
  timeDuration!: string;

  @ViewChild('popupImage') popupImage!: ElementRef<HTMLDialogElement>;

  @ViewChild('popupTrailer') popupTrailer!: ElementRef<HTMLDialogElement>;
  
  userHasSnapped!: boolean;

  constructor(private filmService: FilmService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.film.trailerUrl);
    this.timeDuration = this.timeConversion(this.film.duration);
    this.userHasSnapped = false;
  }

  timeConversion(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  }

  openImage(): void {
    this.scrollPosition = window.scrollY;
    this.popupImage.nativeElement.showModal();
  }

  closeImage(): void {
    this.popupImage.nativeElement.close();
    window.scrollTo({ top: this.scrollPosition, behavior: 'instant' });
  }

  onTrailer(){
    this.scrollPosition = window.scrollY;
    this.openedTrailer = true;
    this.popupTrailer.nativeElement.showModal();
  }

  closeTrailer(){
    this.openedTrailer = false;
    this.popupTrailer.nativeElement.close();
    window.scrollTo({ top: this.scrollPosition, behavior: 'instant' });
  }


}
