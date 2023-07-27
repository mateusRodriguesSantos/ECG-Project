import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SuccessFormElementComponent } from './success-form-element/success-form-element.component';
import { ErrorFormElementComponent } from './error-form-element/error-form-element.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { GraficoComponent } from './grafico/grafico.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const appRoutes: Routes = [
  { path : 'cadastro', component: CadastroComponent },
  { path : 'pacientes', component: PacientesComponent },
  { path : 'pacientes/grafico', component: GraficoComponent }
]

@NgModule({
  declarations: [						
    AppComponent,
      CadastroComponent,
      SuccessFormElementComponent,
      ErrorFormElementComponent,
      PacientesComponent,
      GraficoComponent,
      LineChartComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
