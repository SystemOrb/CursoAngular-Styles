import { Component} from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styles: []
})
export class StylesComponent {

  constructor() { }
  varFont = 10;
  fontSize = 'font-size:'+this.varFont+'px';
  alert:boolean = true;
  loading:boolean = false;
  statusLoader = 'Guardar';
  sumFont()
  {
    this.varFont = (this.varFont+5);
  }
  restFont()
  {
    this.varFont = (this.varFont+5);
  }
  loader()
  {
    this.loading = true;
    this.statusLoader = 'Guardando...';
    setTimeout( ()=> this.statusLoader = 'Guardar', 2500 );
    setTimeout( ()=> this.loading = false, 3000 );

  }

}
