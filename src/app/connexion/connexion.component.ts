import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Création du formulaire avec les validateurs natifs
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  handleLogin() {
    if (this.loginForm.valid) {
      console.log('Données de connexion :', this.loginForm.value);
      // Votre logique de connexion ici
    } else {
      // Force l'affichage des erreurs si le bouton est cliqué alors que le formulaire est invalide
      this.loginForm.markAllAsTouched();
    }
  }

}
