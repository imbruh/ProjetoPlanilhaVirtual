import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './TelaPrincipal/TelaPrincipal.component';
import { CadastroUsuarioComponent } from './User/cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './User/login-usuario/login-usuario.component';

const routes: Routes = [
    {
        path: "",
        component: LoginUsuarioComponent
    },
    {
        path: "cadastro",
        component: CadastroUsuarioComponent
    },
    {
        path: "editar/:id",
        component: CadastroUsuarioComponent
    },
    {
        path: "index",
        component: TelaPrincipalComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
