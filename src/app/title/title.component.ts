import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})


export class TitleComponent implements OnInit, OnChanges{
  @Input() nome:string = 'Fravon'

  constructor() {
    console.log(`constructor ${this.nome}`)
   }
  ngOnChanges(){
   console.log(`OnChange ${this.nome}`);

  }

  ngOnInit(): void {
    console.log(`OnInit ${this.nome}`)
      this.nome = `Olá ${this.nome}`
  }


}
