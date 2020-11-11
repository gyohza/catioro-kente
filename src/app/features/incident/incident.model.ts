import { IncidentType } from '../incident-type/incident-type.model';
import { Location } from '../location/location.model';

type SEVERITY_LEVELS = 'least_concern' | 'immininent_threat'
  | 'acute' | 'critical' | 'catastrophe';

export class Incident {
  id: number;
  incident_type: IncidentType;
  location: Location;
  severity: SEVERITY_LEVELS;
  ocurrence_time: Date;
}