import { Beneficio } from './../../../interfaces/Beneficio';
import { CommonModule } from '@angular/common';
import { BeneficioService} from './../../../services/categoria.service'
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-beneficio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
})
export class BeneficioComponent {
  beneficios: Beneficio[] = [];
  beneficioIdEdicao: string | null = null;
  beneficioForm: FormGroup = new FormGroup({});
  constructor(
    private beneficioService: BeneficioService,
    private formBuilder: FormBuilder
  ) {
    this.beneficioForm = formBuilder.group({
      nome: ['', Validators.required],
      imagem: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.listBeneficio();
  }

  listBeneficio(): void {
    this.beneficioService
      .list()
      .subscribe((response) => (this.beneficios = response));
  }

  addBeneficio(): void {
    if (this.beneficioForm.valid) {
      const formData = this.beneficioForm.value;

      const beneficioAdd: Beneficio = {
        id: this.generateRandomString(6),
        nome: formData.nome,
        imagem: formData.imagem,
      };

      this.beneficioService.add(beneficioAdd).subscribe();
      alert('beneficio inserido com successo!');
    } else {
      alert('Formulário inválido!');
    }
    this.beneficioForm.reset();
    this.listBeneficio();
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
