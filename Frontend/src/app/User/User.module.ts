import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
    declarations: [
        CadastroUsuarioComponent,
        LoginUsuarioComponent,    
    ],
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule
    ],
})
export class UserModule { }
