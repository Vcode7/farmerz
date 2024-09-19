
import React,{useState, useEffect} from "react";
import { dataStats } from "@/types/dataStats";


const DataStatsOne = () => {
  const [value, setValue] = useState(0)
  const [weather, setweather] = useState('')
  const [location, setLocation] = useState('')
  
  const [time, setTime] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/moisture", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        const newValue = parseFloat(result.data.value) < 0 ? '0' : result.data.value;
        setValue(newValue);
        
        setTime(format(result.data.time));
      } catch (e) {
        setValue(0);
      }
    };
    function format(dateString) {
      // Create a Date object from the input date string
      const date = new Date(dateString);
      
      // Define options to format the time in 24-hour format (IST)
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24-hour format
        timeZone: 'Asia/Kolkata' // Set the time zone to IST
      };
      
      return date.toLocaleTimeString('en-US', options);
    }

    const fetchWeather = async () => {
      try {
        const w_response = await fetch("http://api.weatherapi.com/v1/current.json?key=2aaa30a1945a47bfae551821241809&q=bengaluru&aqi=no", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const w_result = await w_response.json();
        setweather(w_result.current.temp_c);
        setLocation(w_result.location.name+','+w_result.location.region)
      } catch (e) {
        setweather('not found');
      }
    };
    fetchData()
    fetchWeather()
    const intervalId = setInterval(fetchData, 1000);
    const interweather = setInterval(fetchWeather, 100000);
    return () => {
      clearInterval(intervalId);
      clearInterval(interweather);
    }
  }, []);
  

  const dataStatsList = [
    {
      color: "#3FD97F",
      title: "Moisture",
      value: value,
      recent: time,
    },
    {
      color: "#FF9C55",
      title: "Solar Power usage",
      value: "20W",
      recent: "12:00",
    },
    {
      color: "#8155FF",
      title: "Weather",
      value: weather,
      recent: '',
      location: location,
    },
  ];
  
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
          >
            <div
              className="flex h-14.5 text-heading-6  text-dark font-bold dark:text-white items-center justify-center rounded-lg"
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </div>

            
            <div className="mt-6 flex items-end justify-between">
              <div>
                <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                  {item.value}
                </h4>
                
                <span className="text-body-sm font-large">
                {item.recent == '' ? (
                  'location'
                ) : (
                 
                  'last reading at'
                  
                )}
                </span>
              </div>
              
              <span className="flex items-center gap-1.5 text-body-sm font-medium text-green" >
                {item.recent == '' ? (
                  item.location
                ) : (
                 
                  item.recent
                  
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataStatsOne;
