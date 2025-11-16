import { Current } from "./Current";
import { Location } from "./Location";

export interface FeatchWeatherResponse {
  location: Location,
  current: Current,
}