
import React,{useState, useEffect} from "react";
import { dataStats } from "@/types/dataStats";


const DataStatsOne: React.FC<dataStats> = () => {
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

    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, []);
  

  const dataStatsList = [
    {
      color: "#3FD97F",
      title: "Moisture",
      value: value,
      growthRate: 0.43,
    },
    {
      color: "#FF9C55",
      title: "Power usage",
      value: "20W",
      growthRate: 4.35,
    },
    {
      color: "#8155FF",
      title: "Weather",
      value: "20",
      growthRate: 2.59,
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
                <span className="text-body-sm font-large">real time value</span>
              </div>

              <span
                className={`flex items-center gap-1.5 text-body-sm font-medium ${
                  item.growthRate > 0 ? "text-green" : "text-red"
                }`}
              >
                {item.growthRate}%
                {item.growthRate > 0 ? (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z"
                      fill=""
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 7.6075L9.09102 4.255L10 5.13875L5 10L-8.98488e-07 5.13875L0.908973 4.255L4.35716 7.6075L4.35716 7.6183e-07L5.64284 9.86625e-07L5.64284 7.6075Z"
                      fill=""
                    />
                  </svg>
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
