import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ctrl+D - Refatoração
  private _newEmailForm = false;

  emails = [
    {assunto:'Email 1', destinatario:'dest1', conteudo:'teste 1'},
    {assunto:'Email 2', destinatario:'dest2', conteudo:'teste 2'}
  ]

  email = {
    destinatario: '',
    assunto:'',
    conteudo:''
  };

  handleCriarEmail(evento : Event, formEmail : NgForm){
    
    evento.preventDefault();

    if (formEmail.invalid) return;
      this.emails.push(this.email);
    
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

