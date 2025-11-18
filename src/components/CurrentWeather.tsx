import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import useWeather from "../hooks/useWeather";
import CurrentWeatherCard from "./CurrentWeatherCard";
import HourWeatherCard from "./HourWeatherCard";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HourWeatherHeading from "./HourWeatherHeading";

interface Props {
  locationId: number;
  onLastUpdatedChange?: (lastUpdated: string) => void;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
    return(
        <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowLeft className="arrows" style={{color:"white"}}/>
    </div>
    )
}

export const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
    return(
    <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowRight className="arrows" style={{color:"white"}}/>
    </div>
    )
}

function CurrentWeather({ locationId, onLastUpdatedChange }: Props) {
  const { weather, error } = useWeather(locationId);
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {weather && (
        <CurrentWeatherCard weather={weather} isCelsius={isCelsius} />
      )}
      <HourWeatherHeading onCelsiusChange={(isC) => {setIsCelsius(isC)}} isCelsius={isCelsius} />
      {weather && (
        <SimpleGrid columns={1} spacing={10} marginY='2.5rem'>
          <Slider {...settings}>
            {weather?.forecast?.forecastday.map((day) =>
              day.hour.map((hour) => (
                <HourWeatherCard key={hour.time} hour={hour} isCelsius={isCelsius} />
              ))
            )}
          </Slider>
        </SimpleGrid>
      )}
    </>
  )
}

export default CurrentWeather;