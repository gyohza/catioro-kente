import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '../location.model';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent {
  form = this.fb.group({
    description: [this.data?.description, Validators.required],
    latitude: [this.data?.latitude, Validators.required],
    longitude: [this.data?.longitude, Validators.required],
    zipcode: [this.data?.zipcode, Validators.required],
  });

  constructor(private fb: FormBuilder,
    public svc: LocationService,
    public dialogRef: MatDialogRef<LocationEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location) {}

  closeSelf() {
    this.dialogRef.close();
  }

  onSubmit() {
    const request = this.form.value;
    if (this.data?.id) {
      this.svc.resetLocation(this.data.id, request).subscribe(
        res => this.dialogRef.close('Cadastro atualizado com êxito!'),
        err => this.dialogRef.close(new Error(err.message))
      );
    } else {
      this.svc.setLocation(request).subscribe(
        res => this.dialogRef.close('Cadastro efetuado com êxito!'),
        err => this.dialogRef.close(new Error(err.message))
      );
    }
  }
}
