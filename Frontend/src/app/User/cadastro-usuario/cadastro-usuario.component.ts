import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

    user = new User();

    constructor(private userService: UserService) { }

    ngOnInit() {
    }

    cadastrar(){
        this.userService.cadastrar(this.user).subscribe(
            x=>{
                console.log(x)
            }
        )
    }
}
