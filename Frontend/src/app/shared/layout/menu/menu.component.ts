import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService, private roteador: Router) { }

  ngOnInit() {
  }

  editarPerfil() {
    let userID = this.userService.capturarLocalStorage();

    if(userID!=0){
      this.roteador.navigate(['editar', userID])
      // .then(_r => {
      //   })
    }
  }

  sair() {
    this.userService.setarLocalStorage("0");
    this.roteador.navigate(['']);
  }

}
