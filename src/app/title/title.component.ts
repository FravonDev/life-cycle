import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})


export class TitleComponent implements OnInit{

  constructor() { }

  nome:string = 'Fravon'
  ngOnInit(): void {
    console.log('Title component Nasceu')
      this.nome = `Olá ${this.nome}`
  }


}
