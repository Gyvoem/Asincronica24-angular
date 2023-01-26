import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActComponent } from './act/act.component';
import { LoremComponent } from './lorem/lorem.component';



const routes: Routes = [
  {path: '', component: LoremComponent},
  {path: 'lorem', component: LoremComponent},
  {path: 'act', component: ActComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
