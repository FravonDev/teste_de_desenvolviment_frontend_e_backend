import { Component, OnInit } from '@angular/core';
import { rotas } from '../models/data';
import { VeiculosService } from '../services/veiculos.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{
  dados: rotas[] = []

  constructor(private veiculosService: VeiculosService) {
   }


   ngOnInit(): void {
        this.atualizarDados();

        setInterval(() => {
          this.atualizarDados();
          console.log('Atualizado')
        }, 30000);
   }

   atualizarDados(): void {
    this.veiculosService.getData().subscribe((res) => {
      this.dados =  res;
    });
  }
}
