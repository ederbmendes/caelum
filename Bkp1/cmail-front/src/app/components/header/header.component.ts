import { Component } from "@angular/core";


@Component({
    selector:'cmail-header',
    templateUrl:'./header.component.html',
    styleUrls:[
        './header.component.css',
        './header-search.css'
    ]    
})
export class HeaderComponent{

    tituloPagina = 'E-mail box';
    private _ativaMenu = false;

    toggleMenu(){
        
     this._ativaMenu = !this._ativaMenu;

    }

    //Propriedade -- boa prática
    get isMenuOpen(){
        return this._ativaMenu
    }

}