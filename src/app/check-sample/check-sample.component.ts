import {
      Component,
      OnInit,
      DoCheck,
      AfterContentChecked,
      AfterContentInit,
      AfterViewChecked,
      AfterViewInit,OnDestroy
   } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
 implements OnInit,
 DoCheck,
 AfterContentChecked,
 AfterContentInit,
 AfterViewChecked,
 AfterViewInit,
 OnDestroy
 {
  quantidade: number = 0
  constructor() {}

  adicionar():void{
    this.quantidade += 1
  }
  decrementar(){
    this.quantidade =- 1
  }
  ngAfterViewInit(): void {
    console.log(`AfterViewInit`)
  }
  ngAfterViewChecked(): void {
    console.log(`AfterViewInit`)
  }
  ngAfterContentInit(): void {
    console.log(`AfterContentInit`)
  }
  ngAfterContentChecked(): void {
    console.log(`AfterContentChecked`)
  }
  ngDoCheck(): void {
    console.log(`DoCheck`)
  }

  ngOnInit(): void {
    console.log(`OnInit`)
  }
  ngOnDestroy(): void {
    console.log('GoodBye my Friend...')
  }

}
