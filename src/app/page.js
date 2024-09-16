'use client';

import Data from "@/components/Dashboard/Sensor-data";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default function Home() {
  return (
    <>
     <DefaultLayout>   
        <Data />
      </DefaultLayout>
      </>
    );
}
