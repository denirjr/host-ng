import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: environment.mf.mf1, //Remote dynamic URL
        remoteName: 'mfe1', // remote mf application
        exposedModule: './MfefeatureModule', // exposed module declared on mf webpack
      }).then((m) => m.MfefeatureModule),

    // Conventional approach, but needs webpack host pre configuration
    // loadChildren: () =>
    //   import('mfe1/MfefeatureModule').then((m) => {
    //     return m.MfefeatureModule;
    //   }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
