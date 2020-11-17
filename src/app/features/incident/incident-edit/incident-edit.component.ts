import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncidentType } from '../../incident-type/incident-type.model';
import { IncidentTypeService } from '../../incident-type/service/incident-type.service';
import { Location } from '../../location/location.model';
import { LocationService } from '../../location/service/location.service';
import { Incident } from '../incident.model';
import { IncidentService } from '../service/incident.service';

@Component({
  selector: 'app-incident-edit',
  templateUrl: './incident-edit.component.html',
  styleUrls: ['./incident-edit.component.scss']
})
export class IncidentEditComponent implements OnInit {
  form = this.fb.group({
    incident_type: [this.data.incident_type?.id, Validators.required],
    location: [this.data?.location, Validators.required],
    severity: [this.data?.severity, Validators.required],
    occurrence_time: [new Date(this.data?.occurrence_time), Validators.required],
    description: [this.data?.description, Validators.required],
  });

  incidentTypeList: IncidentType[] = [];

  locationList: Location[] = [];

  severityLevelList: [string, any][] =
    Object.entries(Incident.SEVERITY_LEVELS);

  constructor(private fb: FormBuilder,
    public svc: IncidentService,
    public incidentTypeSvc: IncidentTypeService,
    public LocationSvc: LocationService,
    public dialogRef: MatDialogRef<IncidentEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Incident) {}

  private locationTimeout: number = 0;
  
  getLocations(options?: {
    delay?: number,
    search?: string,
  }) {
    window.clearTimeout(this.locationTimeout);
    this.locationTimeout = window.setTimeout(() => {
      this.locationList = null;
      this.LocationSvc.getLocations({ search: options?.search || ''}).subscribe(
        res => this.locationList = res.data
      );
    }, options?.delay || 0);
  }

  selectedLocation(location: Location): string {
    return location?.description;
  }

  ngOnInit(): void {
    this.incidentTypeSvc.getIncidentTypes().subscribe(
      res => this.incidentTypeList = res.data
    );
    this.getLocations();
  }

  closeSelf() {
    this.dialogRef.close();
  }

  onSubmit() {
    const form = this.form.value;
    const request = {
      incident_type_id: form.incident_type,
      location_id: form.location.id,
      severity: form.severity,
      occurrence_time: form.occurrence_time
        .toISOString().replace(/(.+)T.+/g, '$1').trim(),
      description: form.description,
    };
    if (this.data?.id) {
      this.svc.resetIncident(this.data.id, request).subscribe(
        res => this.dialogRef.close('Cadastro atualizado com êxito!'),
        err => this.dialogRef.close(new Error(err.message))
      );
    } else {
      this.svc.setIncident(request).subscribe(
        res => this.dialogRef.close('Cadastro efetuado com êxito!'),
        err => this.dialogRef.close(new Error(err.message))
      );
    }
  }
}
