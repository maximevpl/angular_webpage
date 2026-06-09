import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {RouterLinkActive} from "@angular/router";
import { ConnexionComponent } from '../connexion/connexion.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    ConnexionComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('popupConnexion') popupConnexion!: ElementRef<HTMLDialogElement>;

  constructor(private router: Router) {}
  private scrollPosition: number = 0;

  goHome(){
    this.router.navigateByUrl('');
  }

  onConnexion(){
    this.scrollPosition = window.scrollY;
    this.popupConnexion.nativeElement.showModal();
  }

  closeConnexion(){
    this.popupConnexion.nativeElement.close();
    window.scrollTo({ top: this.scrollPosition, behavior: 'instant' });
  }
}
