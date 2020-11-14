import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { IncidentService } from './service/incident.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IncidentEditComponent } from './incident-edit/incident-edit.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    IncidentListComponent,
    IncidentEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'incidents', component: IncidentListComponent },
    ]),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    ReactiveFormsModule,
  ],
  providers: [
    IncidentService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class IncidentModule { }
