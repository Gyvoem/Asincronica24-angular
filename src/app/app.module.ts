import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstilosAngMaterialComponent } from './principal/estilos-ang-material/estilos-ang-material.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoremComponent } from './lorem/lorem.component';
import { ActComponent } from './act/act.component';
import { HomeComponent } from './home/home.component';
import { BoxComponent } from './box/box.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoremComponent,
    ActComponent,
    HomeComponent,
    BoxComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,        
    MatProgressSpinnerModule,
    MatListModule,    
    MatProgressBarModule,
    MatChipsModule,
    LayoutModule,
    MatSidenavModule,  
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
