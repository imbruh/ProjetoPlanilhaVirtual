import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private roteador: Router, private userService: UserService, private costService: CostService) { }

  ngOnInit() {
    if(this.userService.capturarLocalStorage() != 0){
      this.userService.pesquisarPorId(this.userService.capturarLocalStorage()).subscribe(
        user => 
        {
          this.user = user;
          if(this.user.id != undefined){
            this.costService.listarCustos(this.user.id).subscribe(
              costs => {
                console.log(costs);
                this.costs = costs;
                this.somaValorTotal();
                this.subtrairValorRestante();             
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
        this.valorTotal += cost.valor
        this.valorRestante 
        this.subtrairValorRestante();     
        this.cost = new Cost();
      }
    );
  }

  apagar(cost_id: number) {
    this.costService.apagar(cost_id).subscribe(
      () => {
        for(let i in this.costs){
          if(this.costs[i].id == cost_id){
            this.valorTotal -= this.costs[i].valor
            this.valorRestante += this.costs[i].valor;   
            this.costs.splice(i,1)        
          }
        }
      }
    )
  }

  somaValorTotal() {
    for(let cost of this.costs){
      this.valorTotal += cost.valor;
    }
  }

  subtrairValorRestante() {
    if(this.user.salario != undefined){
      this.valorRestante = this.user.salario - this.valorTotal;
    }     
  }

}
