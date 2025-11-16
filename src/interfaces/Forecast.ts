import { Condition } from "./Common"

export interface Forecast {
    forecastday: ForecastDay[]
}

interface ForecastDay {
    date: string
    date_epoch: number
    hour: Hour[]
}

export interface Hour {
    time: string
    temp_c: number
    humidity: number
    condition: Condition
}