import { Current } from "./Current";
import { Forecast } from "./Forecast";
import { Location } from "./Location";

export interface FeatchWeatherResponse {
  location: Location,
  current: Current,
  forecast: Forecast,
}