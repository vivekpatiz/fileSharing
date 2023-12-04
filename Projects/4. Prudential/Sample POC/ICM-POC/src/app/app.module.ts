import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { PropertiesComponent } from './properties/properties.component';
import { TreeComponent } from './tree/tree.component';
import { HttpClientModule } from '@angular/common/http';
import { EntityService } from './Services/entity.service'

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    TreeComponent
  ],
  imports: [FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    
  ],
  providers: [EntityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
