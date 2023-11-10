import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html'
})


export class ComponenteAComponent implements OnInit{

  @Output()
  selecionado: string = ''

  @Input()
  start: string = "2023-01-01"

  @Input()
  end: string = "2023-01-31"

  ngOnInit(): void {
  }

}
