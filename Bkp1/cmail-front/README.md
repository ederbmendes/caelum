##vinculação do evento
<form (submit)="handleCriarEmail($event)" [ngClass]="{ 'newEmail--active' : isNewEmailOpen}" class="newEmail cmailForm">

<div class="mdl-textfield mdl-textfield--floating-label">
                  <input 
                  (input)="email.assunto = $event.target.value" 
                  [value] = "email.assunto"                  
                  required type="text" name="assunto" id="assunto" placeholder=" " class="mdl-textfield__input">