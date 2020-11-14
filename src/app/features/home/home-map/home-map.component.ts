import { Component, OnInit } from '@angular/core';
import { Incident } from '../../incident/incident.model';
import { IncidentService } from '../../incident/service/incident.service';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss']
})
export class HomeMapComponent implements OnInit {
  isLoading: boolean;
  incidentList: Incident[];
  midpoint: [number, number];

  constructor(private svc: IncidentService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.svc.getIncidents().subscribe(
      res => {
        this.incidentList = res.data.map(
          v => Object.assign(new Incident(), v)
        );

        let coords = res.data.map(v =>
          [v.location.latitude, v.location.longitude]);

        this.midpoint = coords.reduce((t, v) => {
          t[0] += v[0];
          t[1] += v[1];
          return t;
        }, [0, 0]).map(v => v / coords.length) as [number, number];

        this.isLoading = false;
        window['a'] = this;
      }
    );
  }
}
