
import React,{useState, useEffect} from "react";
import { dataStats } from "@/types/dataStats";


const DataMoisture = () => {
  const [value, setValue] = useState(0)
  
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
        setValue(result.data.value);
        
      } catch (e) {
        setValue(0);
      }
    };
    
    fetchData()
    const intervalId = setInterval(fetchData, 10000);
    return () => {
      clearInterval(intervalId);

    }
  }, []);
  

  const dataStatsList = [
    {
      color: "#3FD97F",
      title: "Moisture 1",
      value: value,
      recent: '12:01',
    },
    {
        color: "#3FD97F",
        title: "Moisture 2",
        value: value,
        recent: '12:01',
      },
      {
        color: "#3FD97F",
        title: "Moisture 3",
        value: value,
        recent: '12:01',
      },
      {
        color: "#3FD97F",
        title: "Moisture 4",
        value: value,
        recent: '12:01',
      }
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
                  last reading at
                </span>
              </div>
              
              <span className="flex items-center gap-1.5 text-body-sm font-medium text-green" >
                {item.recent}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataMoisture;
