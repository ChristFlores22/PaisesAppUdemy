import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit{

  
  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter<string>();


  @Output()
  onDebounce:EventEmitter<string> = new EventEmitter<string>();
  
  @Input()
  placeHolder:string='';

  debouncer: Subject<string> = new Subject<string>();

  termino:string='';
  
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor => { 
      this.onDebounce.emit( valor );
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){        
    this.debouncer.next(this.termino);
  }
}
