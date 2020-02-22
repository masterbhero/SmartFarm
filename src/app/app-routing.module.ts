

import { McDataComponent } from './mc-data/mc-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagedeviceComponent } from './managedevice/managedevice.component';
import { RegisterComponent } from './register/register.component';
import { PlotComponent } from './plot/plot.component';
import { EditComponent } from './edit/edit.component';
import { AddeviceComponent } from './addevice/addevice.component';
import { AdminComponent } from './admin/admin.component';
import { FertconfigComponent } from './fertconfig/fertconfig.component';
import { PlantDataComponent } from './plant-data/plant-data.component';
import { PlantconfigComponent } from './plantconfig/plantconfig.component';
import { UserComponent } from './user/user.component';
import { WateringComponent } from './watering/watering.component';
import { WateringResultComponent } from './watering-result/watering-result.component';
import { PlotmenuComponent } from './plotmenu/plotmenu.component';
import { AdminAdduserComponent } from './admin-adduser/admin-adduser.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { PlantsComponent } from './plants/plants.component';
import { PlanteditComponent } from './plantedit/plantedit.component';
import { MceditComponent } from './mcedit/mcedit.component';
import { McaddComponent } from './mcadd/mcadd.component';
import { BackupComponent } from './backup/backup.component';
import { BackupPlantComponent } from './backup-plant/backup-plant.component';
import { BackupMcComponent } from './backup-mc/backup-mc.component';



const routes: Routes = [
  { path: '',component:LoginComponent},
  { path: 'login',component: LoginComponent},
  { path: 'managedevice',component: ManagedeviceComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'plot',component: PlotComponent},
  { path: 'edit',component: EditComponent},
  { path: 'addevice',component: AddeviceComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'fertconfig',component: FertconfigComponent},
  { path: 'plant-data',component: PlantDataComponent},
  { path: 'plantconfig',component: PlantconfigComponent},
  { path: 'user',component: UserComponent},
  { path: 'watering',component: WateringComponent},
  { path: 'watering-result',component: WateringResultComponent},
  { path: 'plotmenu',component: PlotmenuComponent},
  { path: 'AdminAdduser',component: AdminAdduserComponent},
  { path: 'AdminEdit',component: AdminEditComponent},
  { path: 'AdminDeletet',component: AdminDeleteComponent},
  { path: 'mc-data',component: McDataComponent},
  { path: 'Plants',component: PlantsComponent},
  { path: 'Plantedit',component: PlanteditComponent},
  { path: 'Mcadd',component: McaddComponent},
  { path: 'Mcedit',component: MceditComponent},
  { path: 'Backup',component: BackupComponent},
  { path: 'BackupPlant',component: BackupPlantComponent},
  { path: 'BackupMc',component: BackupMcComponent},
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
