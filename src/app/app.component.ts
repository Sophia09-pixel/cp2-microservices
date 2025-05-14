import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeneficioComponent } from './categoria/categoria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BeneficioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cp2';
}
