"use client";

import { useEffect, useState } from "react";
import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun, Wind, Droplets, Thermometer } from "lucide-react";
import { motion } from "framer-motion";

interface WeatherData {
    temperature: number;
    weatherCode: number;
    humidity: number;
    windSpeed: number;
    precipitation: number;
}

interface WeatherWidgetProps {
    latitude?: number;
    longitude?: number;
    locationName?: string;
}

export function WeatherWidget({
    latitude = 27.0367,
    longitude = 75.8753,
    locationName = "Kukas, Jaipur"
}: WeatherWidgetProps) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Fetching additional parameters: relative_humidity_2m, wind_speed_10m, precipitation
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code`
                );
                const data = await response.json();

                setWeather({
                    temperature: Math.round(data.current.temperature_2m),
                    weatherCode: data.current.weather_code,
                    humidity: data.current.relative_humidity_2m,
                    windSpeed: data.current.wind_speed_10m,
                    precipitation: data.current.precipitation,
                });
            } catch (error) {
                console.error("Failed to fetch weather:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();

        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, [latitude, longitude]);

    const getWeatherIcon = (code: number, size = "w-12 h-12") => {
        if (code === 0 || code === 1) return <Sun className={`${size} text-yellow-500`} />;
        if (code === 2 || code === 3) return <Cloud className={`${size} text-gray-400`} />;
        if (code >= 45 && code <= 48) return <CloudFog className={`${size} text-gray-400`} />;
        if (code >= 51 && code <= 67) return <CloudRain className={`${size} text-blue-400`} />;
        if (code >= 71 && code <= 77) return <CloudSnow className={`${size} text-blue-300`} />;
        if (code >= 80 && code <= 86) return <CloudRain className={`${size} text-blue-500`} />;
        if (code >= 95 && code <= 99) return <CloudLightning className={`${size} text-yellow-600`} />;
        return <Sun className={`${size} text-yellow-500`} />;
    };

    const getWeatherDescription = (code: number) => {
        if (code === 0) return "Clear Sky";
        if (code === 1) return "Mainly Clear";
        if (code === 2) return "Partly Cloudy";
        if (code === 3) return "Overcast";
        if (code >= 45 && code <= 48) return "Foggy";
        if (code >= 51 && code <= 67) return "Rainy";
        if (code >= 71) return "Snowy";
        if (code >= 80) return "Heavy Rain";
        if (code >= 95) return "Thunderstorm";
        return "Sunny";
    };

    if (loading) return <div className="h-full w-full bg-gray-100 rounded-xl animate-pulse" />;

    if (!weather) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full bg-white border border-gray-100 p-8 rounded-xl shadow-sm flex flex-col justify-between"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Current Weather</h3>
                    <h2 className="text-2xl font-serif text-stayra-charcoal">{locationName}</h2>
                </div>
                {getWeatherIcon(weather.weatherCode, "w-16 h-16")}
            </div>

            <div className="flex items-center gap-4 my-8">
                <span className="text-6xl font-serif text-stayra-charcoal font-medium">
                    {weather.temperature}°
                </span>
                <div className="flex flex-col">
                    <span className="text-xl text-gray-600 font-medium">{getWeatherDescription(weather.weatherCode)}</span>
                    <span className="text-sm text-gray-400">Feels like {weather.temperature}°</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                <div className="flex flex-col items-center text-center gap-2">
                    <Droplets className="w-6 h-6 text-blue-400" />
                    <div>
                        <span className="block text-lg font-semibold text-gray-700">{weather.humidity}%</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Humidity</span>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <Wind className="w-6 h-6 text-gray-400" />
                    <div>
                        <span className="block text-lg font-semibold text-gray-700">{weather.windSpeed} km/h</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Wind</span>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <CloudRain className="w-6 h-6 text-indigo-400" />
                    <div>
                        <span className="block text-lg font-semibold text-gray-700">{weather.precipitation} mm</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Precipitation</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
