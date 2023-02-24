import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DividrExampleComponent } from './components/dividr-example/dividr-example.component';

const routes: Routes = [
  {
    path:'divider',component:DividrExampleComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
