import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentTypeComponent } from './incident-type-list/incident-type-list.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IncidentTypeService } from './service/incident-type.service';
import { IncidentTypeEditComponent } from './incident-type-edit/incident-type-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    IncidentTypeComponent,
    IncidentTypeEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'incident-types', component: IncidentTypeComponent },
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
    IncidentTypeService,
  ],
})
export class IncidentTypeModule { }
