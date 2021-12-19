import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/shared/dto/login';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  loginDTO = new LoginDTO();

  constructor(private userService: UserService, private roteador: Router) { }

  ngOnInit() {
  }

  login() {
    let usuario = {
      "usuario": this.loginDTO.usuario,
      "senha": this.loginDTO.senha
    }

    this.userService.login(usuario).subscribe(
      user => {
        if(user.id == 0) {
          //mensagem de usuario ou senha invalidos
        }
        else {
          this.userService.setarLocalStorage(user.id);
          this.roteador.navigate(['index']);
        }
      }
    )
  }

}
