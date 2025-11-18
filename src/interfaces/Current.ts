import { Condition } from "./Common"

export interface Current {
  temp_c: number
  temp_f: number
  wind_kph: number
  humidity: number
  feelslike_c: number
  feelslike_f: number
  last_updated: string
  condition: Condition
}
