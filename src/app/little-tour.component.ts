import { Component } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)="addHero(newHero.value)">Add</button>

    <ul><li *ngFor="let hero of heroes; let i = index " >{{hero}}
    <button (click)="removeHero(i)">Remove</button></li></ul>
  `
})
export class LittleTourComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
 
  }

  removeHero(rHero: any){
       if (rHero > -1) {
      this.heroes.splice(rHero, 1);
    }
    console.warn(this.heroes)
  }
}

/* # Template variable

-Use template variables to refer to elements — The newHero template variable refers to the <input> element. You can reference newHero from any sibling or child of the <input> element.

-Pass values, not elements — Instead of passing the newHero into the component's addHero method, get the input box value and pass that to addHero.

-Keep template statements simple — The (blur) event is bound to two JavaScript statements. The first statement calls addHero. The second statement, newHero.value='', clears the input box after a new hero is added to the list.


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/