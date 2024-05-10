import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
const routes :Routes = [
    {
        path:'',
        redirectTo:'',
        pathMatch: "full"
    },
    {
        path:'',
        component:HomeComponent,
        pathMatch: 'full'
    }
]
@NgModule({
        imports:[
            RouterModule.forRoot(routes)
        ],
        exports:[RouterModule]
    })
export class AppRouterModule {

}