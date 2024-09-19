import React from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLaout";

import ButtonDefault from "@/components/Buttons/ButtonDefault";

const About = () => {
  return (
    <div>
      <DefaultLayout>

        <div className="mb-10 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
            <div className="mt-4 flex justify-center flex-col text-center">
              <div className="roboto-mono-234 mb-10 text-5xl font-bold w-full text-center text-dark dark:text-white" >
                I²
              </div>

              <div className="mx-auto max-w-[720px]">
                <h4 className="font-medium text-dark dark:text-white">
                  About Us
                </h4>
                <p className="mt-4">
                  I² is an innovative team dedicated to revolutionizing agriculture through technology. Our mission is to develop smart, sustainable solutions for modern farming challenges. By integrating advanced technologies into one unified app, we empower farmers with tools for efficient irrigation management, biofuel utilization, solar power solutions, and more. Our platform ensures real-time monitoring, resource optimization, and eco-friendly practices to increase productivity and sustainability. With a focus on making agriculture smarter, greener, and more accessible, I² aims to bridge the gap between traditional farming and future-ready tech solutions.
                </p>
              </div>

            </div>
          </div>

          <div className="p-4 md:p-6 xl:p-9">
            <div className="mb-7.5 flex flex-wrap justify-center gap-5 xl:gap-20">

              <ButtonDefault
                label="Go to The Dhasboard"
                link="/"
                customClasses="bg-primary text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10"
              />
            </div>

          </div>
        </div>
      </DefaultLayout>

    </div>
  )
}

export default About