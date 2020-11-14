import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncidentType } from '../incident-type.model';
import { IncidentTypeService } from '../service/incident-type.service';

@Component({
  selector: 'app-incident-type-edit',
  templateUrl: './incident-type-edit.component.html',
  styleUrls: ['./incident-type-edit.component.scss']
})
export class IncidentTypeEditComponent {
  form = this.fb.group({
    description: [this.data?.description, Validators.required],
  });

  constructor(private fb: FormBuilder,
    public svc: IncidentTypeService,
    public dialogRef: MatDialogRef<IncidentTypeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IncidentType) {}

  closeSelf() {
    this.dialogRef.close();
  }

  onSubmit() {
    const request = this.form.value;
    if (this.data?.id) {
      this.svc.resetIncidentType(this.data.id, request).subscribe(
        res => this.dialogRef.close('Cadastro atualizado com êxito!'),
        err => this.dialogRef.close(new Error(err.message))
      );
    } else {
      this.svc.setIncidentType(request).subscribe(
        res => this.dialogRef.close('Cadastro efetuado com êxito!'),
        err => this.dialogRef.close(new Error(err.message))
      );
    }
  }
}
