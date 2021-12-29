import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

    user = new User();

    constructor(private userService: UserService, private rotaAtual: ActivatedRoute, private roteador: Router) { }

    ngOnInit() {
        if (this.rotaAtual.snapshot.paramMap.has('id')) {
            const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));

            this.userService.pesquisarPorId(idParaEdicao).subscribe(
                user => {this.user = user} 
            )
        }
    }

    cadastrar(){
        this.userService.cadastrar(this.user).subscribe(
            user=>{
                this.userService.setarLocalStorage(user.id);
                this.roteador.navigate(['index']);
            }
        )
    }

    editar() {
        this.userService.editar(this.user).subscribe(
            user => {
                this.user = user;
                this.roteador.navigate(['index']);
                //mensagem usuario atualizado com sucesso
            }
        )
    }
}
