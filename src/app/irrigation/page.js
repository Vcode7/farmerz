'use client';
import React,{useState,useEffect} from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import DataMoisture from '@/components/DataStats/DataMoisture.js';
import SetCrop from "../../components/setcrop";

const Irrigation = () => {
  const [log, setLog] = useState('');
  const [showset, setshowset] = useState(false)
  useEffect(() => {
  const getlogs = ()=>{
    let res = "water on at 12:00 , water off at 12:30 , soil moisture normal"
    setLog(res)
  }
    getlogs()
  }, [])
  
  return (
    <div>
        <DefaultLayout>   
        <DataMoisture />
        <button
          type="submit"
          onClick={()=>{
            if(showset){
              setshowset(false)
            }
            else{setshowset(true)}
          }}
          className="flex cursor-pointer mt-10 items-center  pr-10 pl-10 justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
          Set Crop and moisture level
        </button>
       {showset ?<SetCrop /> : <div></div>}
          <div className="mb-10 mt-10 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
        <div className="mt-4 flex justify-center flex-col ">
        <div className="mb-10 text-3xl font-bold w-full text-dark dark:text-white">
           Water motor and soil details
          </div>
            <div className="mb-10 text-2xl font-bold w-full text-gray-6 dark:text-gray-5">
            {log.split('').map((char, index) => {
        if (char === ',') {
          return <br key={index} />;
        } else {
          return char;
        }
      })}
          </div>
</div>
            


        </div>
      </div>
   </DefaultLayout>

    </div>
  )
}

export default Irrigation