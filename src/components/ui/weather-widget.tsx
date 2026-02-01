"use client";

import { useEffect, useState } from "react";
import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun, Wind } from "lucide-react";
import { motion } from "framer-motion";

interface WeatherData {
    temperature: number;
    weatherCode: number;
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
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
                );
                const data = await response.json();

                setWeather({
                    temperature: Math.round(data.current.temperature_2m),
                    weatherCode: data.current.weather_code,
                });
            } catch (error) {
                console.error("Failed to fetch weather:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();

        // Refresh every 30 minutes
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, [latitude, longitude]);

    const getWeatherIcon = (code: number) => {
        // WMO Weather interpretation codes (https://open-meteo.com/en/docs)
        if (code === 0 || code === 1) return <Sun className="w-6 h-6 text-yellow-500" />;
        if (code === 2 || code === 3) return <Cloud className="w-6 h-6 text-gray-400" />;
        if (code >= 45 && code <= 48) return <CloudFog className="w-6 h-6 text-gray-400" />;
        if (code >= 51 && code <= 67) return <CloudRain className="w-6 h-6 text-blue-400" />;
        if (code >= 71 && code <= 77) return <CloudSnow className="w-6 h-6 text-blue-300" />;
        if (code >= 80 && code <= 86) return <CloudRain className="w-6 h-6 text-blue-500" />;
        if (code >= 95 && code <= 99) return <CloudLightning className="w-6 h-6 text-yellow-600" />;
        return <Sun className="w-6 h-6 text-yellow-500" />;
    };

    if (loading || !weather) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur-sm border border-stayra-gold/20 p-3 rounded-2xl shadow-lg flex items-center gap-3 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
            <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-stayra-charcoal/60 font-semibold">{locationName}</span>
                <div className="flex items-center gap-2">
                    {getWeatherIcon(weather.weatherCode)}
                    <span className="font-serif text-xl text-stayra-charcoal font-medium">
                        {weather.temperature}°C
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
