import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cost } from '../shared/model/cost';
import { User } from '../shared/model/user';
import { CostService } from '../shared/service/cost.service';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-TelaPrincipal',
  templateUrl: './TelaPrincipal.component.html',
  styleUrls: ['./TelaPrincipal.component.scss']
})
export class TelaPrincipalComponent implements OnInit {

  user = new User();
  cost = new Cost();
  costs: any = [];
  valorTotal = 0;
  valorRestante = 0;
  edit = false;
  index = -1;
  ano = new Date().getFullYear();
  meses =[
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]
  mesEscolhido = -1;

  constructor(private roteador: Router, private userService: UserService, private costService: CostService) { }

  ngOnInit() {
    if(this.userService.capturarLocalStorage() != 0){
      this.userService.pesquisarPorId(this.userService.capturarLocalStorage()).subscribe(
        user => 
        {
          this.user = user;
          if(this.user.id != undefined){
            this.costService.listarCustos(this.user.id, new Date().getMonth() + 1, new Date().getFullYear()).subscribe(
              costs => {
                this.costs = costs;
                this.somaValorTotal();       
              }
            )
          }
        }
      )     
    }
    
  }

  inserir() {
    this.cost.data = new Date();
    this.cost.user_id = this.user.id;
    this.costService.inserir(this.cost).subscribe(
      cost => {
        this.cost = cost
        this.costs.push(cost);
        this.somaValorTotal();      
        this.cost = new Cost();
      }
    );
  }

  buscarPorMes(){
    if(this.user.id != undefined){
      this.costService.listarCustos(this.user.id, this.mesEscolhido, new Date().getFullYear()).subscribe(
        costs => {
          this.costs = costs;
          this.somaValorTotal();       
        }
      )
    }
  }

  editFlag(index: number){
    if(this.edit){
      this.edit = false;
      this.index = -1;
    }
    else{
      this.edit = true;
      this.index = index;
    }
  }

  editar(cost: Cost) {
    this.costService.editar(cost).subscribe(
      cost => {
        for(let i in this.costs){
          if(this.costs[i].id == cost.id){
            this.costs[i] = cost;
            this.somaValorTotal();
            this.edit = false;
          }
        }
      }
    )
  }

  apagar(cost_id: number) {
    this.costService.apagar(cost_id).subscribe(
      () => {
        for(let i in this.costs){
          if(this.costs[i].id == cost_id){           
            this.costs.splice(i,1);  
            this.somaValorTotal();  
          }
        }
      }
    )
  }

  somaValorTotal() {
    this.valorTotal = 0;
    for(let cost of this.costs){
      this.valorTotal += cost.valor;
    }
    if(this.user.salario != undefined){
      this.valorRestante = this.user.salario - this.valorTotal;
    }
  }

}
