import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  model = {
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  };

  endereco = {};

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  tratarSubmit() {

  }

  buscarCep(cep: string) {
    this.cepService.obterCep(cep)
      .subscribe((data: any) => {
        this.endereco = data;
      });
  }

}
