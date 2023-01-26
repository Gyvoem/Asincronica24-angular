import { Component } from '@angular/core';

interface Hero {
  id: number,
  name: string,
  power: string,
  alterEgo?: string
}

  /* TABLA */
/*   class TableExpandableRowsExample {
    dataSource = ELEMENT_DATA;
    columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    // expandedElement: PeriodicElement | null;
  }
 */
  //no es reomendable que las interfaces se creen dentro del mismo componente
  
  interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    },
    {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      description: `Helium is a chemical element with symbol He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`,
    }
  ]


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  /* 
  https://angular.io/guide/forms
  formularios template usan:
  - NgModel, 
  - NgForm (As soon as you import FormsModule, this directive becomes active by default on all <form> tags) 
  - y NgModelGroup 
  */

  powers = ['Really Smart', 'Weather Changer'];

  
  nom = '';
  pass = '';
  isDisabled = true;
  submitted = false;

  onSubmit() { 
    console.log(this.nom,this.pass)
    this.submitted = true; 
  }



  //

    dataSource = ELEMENT_DATA;
    columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    // expandedElement: PeriodicElement | null;
  




}


