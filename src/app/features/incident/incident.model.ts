import { IncidentType } from '../incident-type/incident-type.model';
import { Location } from '../location/location.model';

export class Incident {
  id: number;
  incident_type: IncidentType;
  location: Location;
  static SEVERITY_LEVELS = {
    least_concern: 'Pouco preocupante',
    imminent_threat: 'Ameaça iminente',
    acute: 'Urgente',
    critical: 'Crítica',
    catastrophe: 'Catástrofe',
  }
  private _severity: string;
  set severity(val) {
    if (Object.keys(Incident.SEVERITY_LEVELS).includes(val))
      this._severity = val;
  }
  get severity() {
    return Incident.SEVERITY_LEVELS[this._severity];
  }
  occurrence_time: Date;
  description: string;
}
