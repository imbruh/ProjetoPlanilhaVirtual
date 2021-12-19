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
  valorRestante = 0;

  constructor(private roteador: Router, private userService: UserService, private costService: CostService) { }

  ngOnInit() {
    if(this.userService.capturarLocalStorage() != 0){
      this.userService.pesquisarPorId(this.userService.capturarLocalStorage()).subscribe(
        user => {this.user = user}
      ) 
    }
    
  }

  inserir() {
    this.cost.data = new Date();
    this.cost.user = this.user.id;
    this.costService.inserir(this.cost).subscribe(
      cost => {
        this.cost = cost
        this.costs.push(cost);
      }
    );
  }

}
