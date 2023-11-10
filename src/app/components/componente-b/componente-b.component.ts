import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
})

export class ComponenteBComponent implements OnInit {

  //@Output()
  //selecionado: string = 'Paixão de Cristo'

  @Input()
  start: string = ""

  @Input()
  end: string = ""

  @Output()
  onSelected = new EventEmitter<string>()

  listferiados = [ '1/1/23	  domingo	Confraternização Universal',
                   '20/2/23	  segunda-feira	Carnaval',
                   '21/2/23	  terça-feira	Carnaval',
                   '7/4/23	  sexta-feira	Paixão de Cristo',
                   '21/4/23	  sexta-feira	Tiradentes',
                   '1/5/23	  segunda-feira	Dia do Trabalho',
                   '8/6/23	  quinta-feira	Corpus Christi',
                   '7/9/23	  quinta-feira	Independência do Brasil',
                   '12/10/23	quinta-feira	Nossa Sr.a Aparecida - Padroeira do Brasil',
                   '2/11/23	  quinta-feira	Finados',
                   '15/11/23	quarta-feira	Proclamação da República',
                   '25/12/23	segunda-feira	Natal' ]

  ngOnInit(): void {
  }

  selectedNumber(n: string){
    let x: number = 0
    x = parseInt(n)
    //this.onSelected.next(x)
    this.onSelected.next(n)
    //this.selecionado = n
  }
}

