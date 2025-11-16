export interface Current {
  temp_c: number
  wind_kph: number
  humidity: number
  feelslike_c: number
  condition: Condition
}

interface Condition {
    text: string
    icon: string
}