import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    {path: '',
    redirectTo:'dashboard',
    pathMatch:'full'

},
{
    path:'home',
    component: HomeComponent,
    pathMatch:'full',
    children: [
        {
            path:'dashboard',
            pathMatch:'full',
            component:DashboardComponent
        }
    ]
}
]
@NgModule({
    declarations: [],
    imports: [ CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})
export class HomeRouterModule {}