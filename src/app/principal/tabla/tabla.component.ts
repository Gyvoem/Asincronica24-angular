/* import { Component } from '@angular/core';


// ng g @angular/material:table <component-name>
interface Users{
  id: string,
  name: string,
  username: string
}
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {


  constructor(private userService: UserserviceService){}
listado: Users[] = [];
displayedColumns: string[] = ['id', 'name', 'username'];
dataSource: any;
clickedRows = new Set<Users>();


ngOnInit(){

this.userService.getUsersAll().subscribe({
next: (UserAll: Users[]) => {this.listado = UserAll, this.dataSource = this.listado},
error: (e) => console.error(e),
complete: () => console.info("La API devolvio todos los registros")
});

}



}
 */