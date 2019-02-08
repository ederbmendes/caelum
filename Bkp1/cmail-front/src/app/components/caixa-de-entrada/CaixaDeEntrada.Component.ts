import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: []
})
export class CaixaDeEntradaComponent {
  //ctrl+D - Refatoração
  private _newEmailForm = false;

  emailList = []

  email = {
    destinatario: '',
    assunto:'',
    conteudo:''
  };

  handleCriarEmail(evento : Event,formEmail : NgForm){
      evento.preventDefault();

      if (formEmail.invalid) return;

      this.emailList.push(this.email);
    
      this.email = {
        destinatario: '',
        assunto:'',
        conteudo:''
      };

      formEmail.reset();
  }

  toggleNewFormEmail(){
    this._newEmailForm = !this._newEmailForm;
  }

  get isNewEmailOpen(){
    return this._newEmailForm;
  }

}

