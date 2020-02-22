
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ExamplepopupComponent } from './examplepopup/examplepopup.component';
import { RegisterPopupComponent } from './register-popup/register-popup.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { AddevicePopupComponent } from './addevice-popup/addevice-popup.component';
import { ManagedevicePopupComponent } from './managedevice-popup/managedevice-popup.component';
import { UserPopupComponent } from './user-popup/user-popup.component';
import { PlotPopupComponent } from './plot-popup/plot-popup.component';
import { RegisterCancelComponent } from './register-cancel/register-cancel.component';
import { AdminPopupComponent } from './admin-popup/admin-popup.component';
import { PlantDataPopupComponent } from './plant-data-popup/plant-data-popup.component';
import { AdminAdduserComponent } from './admin-adduser/admin-adduser.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { McDataComponent } from './mc-data/mc-data.component';
import { PlantsComponent } from './plants/plants.component';
import { PlanteditComponent } from './plantedit/plantedit.component';
import { McaddComponent } from './mcadd/mcadd.component';
import { MceditComponent } from './mcedit/mcedit.component';
import { PlantDataDeleteComponent } from './plant-data-delete/plant-data-delete.component';
import { McDataDeleteComponent } from './mc-data-delete/mc-data-delete.component';
import {GaugesModule} from 'ng-canvas-gauges';
import { BackupComponent } from './backup/backup.component';
import { BackupPlantComponent } from './backup-plant/backup-plant.component';
import { BackupMcComponent } from './backup-mc/backup-mc.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagedeviceComponent,
    RegisterComponent,
    PlotComponent,
    EditComponent,
    AddeviceComponent,
    AdminComponent,
    FertconfigComponent,
    PlantDataComponent,
    PlantconfigComponent,
    UserComponent,
    WateringComponent,
    WateringResultComponent,
    PlotmenuComponent,
    ExamplepopupComponent,
    RegisterPopupComponent,
    EditPopupComponent,
    AddevicePopupComponent,
    ManagedevicePopupComponent,
    UserPopupComponent,
    PlotPopupComponent,
    RegisterCancelComponent,
    AdminPopupComponent,
    PlantDataPopupComponent,
    AdminAdduserComponent,
    AdminEditComponent,
    AdminDeleteComponent,
    McDataComponent,
    PlantsComponent,
    PlanteditComponent,
    McaddComponent,
    MceditComponent,
    PlantDataDeleteComponent,
    McDataDeleteComponent,
    BackupComponent,
    BackupPlantComponent,
    BackupMcComponent,
    
    
 
  ],
  entryComponents:[
    ExamplepopupComponent,
    RegisterPopupComponent,
    EditPopupComponent,
    AddevicePopupComponent,
    ManagedevicePopupComponent,
    UserPopupComponent,
    PlotPopupComponent,
    FertconfigComponent,
    RegisterCancelComponent,
    AdminPopupComponent,
    PlantDataPopupComponent,
    AdminDeleteComponent,
    PlantDataDeleteComponent,
    McDataDeleteComponent,

  


  ],
  
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    DataTablesModule,
    GaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
