import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionService } from './service/transaction-service.service';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';  
import { MatSelectModule } from '@angular/material/select';  
import { MatOptionModule } from '@angular/material/core'; 
import { MatButtonModule } from '@angular/material/button';  
import { MatPaginatorModule } from '@angular/material/paginator';  
import { MatTableModule } from '@angular/material/table';  
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,  
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [TransactionService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
