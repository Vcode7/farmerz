"use client";
import React, { useState } from "react";

export default function SetCrop() {
  // Define crop options with corresponding moisture levels
  const crops = {
    "Wheat": 60,
    "Maize": 60,
    "Rice": 70,
    "Soybeans": 50,
    "Cotton": 50,
    "Tomatoes": 65,
    "Potatoes": 70,
    "Carrots": 55,
    "Lettuce": 80,
    "Peanuts": 50,
    "Sugarcane": 70,
    "Coffee": 60,
    "Tea": 60,
    "Bananas": 75,
    "Grapes": 60
  };

  // State to store the selected crop and its corresponding moisture level
  const [selectedCrop, setSelectedCrop] = useState("");
  const [moistureLevel, setMoistureLevel] = useState("");
  const [result, setresult] = useState('')
  const handleSubmit_y = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/setcrop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          crop: selectedCrop,
          moisture: moistureLevel,
        }),
      });
      
      const res = await response.json();

      if (res.success) {
        setresult('Crop details and Moisture level updated successfull')
      } else {
        setresult('didnt update , Some error occured');
      }
    } catch (error) {
      setresult("An error occurred while logging in.");
    }
  };
  // Handle crop selection change
  const handleCropChange = (event) => {
    const crop = event.target.value;
    setSelectedCrop(crop);
    setMoistureLevel(crops[crop] || "");
    setresult('')
  };
  const updatevalue = (event) => {
    // Update the state with the new value from the input
    setMoistureLevel(event.target.value);
  };
  return (
    <>
    <form >
      <div className="mb-4 mt-10">
        <label
          htmlFor="crop"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Crop
        </label>
        <div className="relative">
          <select
            name="crop"
            value={selectedCrop}
            onChange={handleCropChange}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          >
            <option value="">Select a crop</option>
            {Object.keys(crops).map((crop, index) => (
              <option key={index} value={crop}>
                {crop}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="moisture"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Moisture Level
        </label>
        <div className="relative">
          <input
            type="text"
            name="moisture"
            value={moistureLevel}
            onChange={updatevalue}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4.5">
        <button
          type="submit"
          onClick={handleSubmit_y}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
          Set
        </button>
      </div>
    </form>
    <div className="text-green">
{result}
    </div>
    </>
  );
}

