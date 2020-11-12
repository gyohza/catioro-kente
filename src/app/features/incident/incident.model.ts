import { IncidentType } from '../incident-type/incident-type.model';
import { Location } from '../location/location.model';

class SeverityLevels {
  static least_concern = 'Pouco preocupante';
  static imminent_threat = 'Ameaça iminente';
  static acute = 'Urgente';
  static critical = 'Crítica';
  static catastrophe = 'Catástrofe';
}

export class Incident {
  id: number;
  incident_type: IncidentType;
  location: Location;
  private _severity: keyof SeverityLevels;
  set severity(val) {
    this._severity = val;
  }
  get severity() {
    return SeverityLevels[this._severity];
  }
  occurrence_time: Date;
}