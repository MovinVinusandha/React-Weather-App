import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Slider from "react-slick";
import useWeather from "../hooks/useWeather";
import CurrentWeatherCard from "./CurrentWeatherCard";
import HourWeatherCard from "./HourWeatherCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  location: string
  onLastUpdatedChange?: (lastUpdated: string) => void;
}

function CurrentWeather({ location, onLastUpdatedChange }: Props) {
  const { weather, error } = useWeather(location);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  useEffect(() => {
    if (!weather) return;
    const last = weather?.current?.last_updated;
    if (last && onLastUpdatedChange) onLastUpdatedChange(last);
  }, [weather, onLastUpdatedChange]);

  return (
    <>
      {error && <Text>{error}</Text>}
      {weather && <CurrentWeatherCard weather={weather} />}
      {weather && (
        <SimpleGrid columns={1} spacing={10} marginY='2.5rem'>
          <Slider {...settings}>
            {weather?.forecast?.forecastday.map((day) =>
              day.hour.map((hour) => <HourWeatherCard key={hour.time} hour={hour} />)
            )}
          </Slider>
        </SimpleGrid>
      )}
    </>
  )
}

export default CurrentWeather;