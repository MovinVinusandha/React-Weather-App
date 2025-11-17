import { Condition } from "./Common"

export interface Current {
  temp_c: number
  wind_kph: number
  humidity: number
  feelslike_c: number
  last_updated: string
  condition: Condition
}
