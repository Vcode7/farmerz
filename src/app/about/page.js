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
            <div className="mb-10 text-5xl font-bold w-full text-center text-dark dark:text-white">
              FARM TECH
            </div>

            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">
                About Us
              </h4>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi quibusdam, fugiat quas perferendis quis dolor molestias alias tenetur ad fugit sit sint itaque exercitationem et sed asperiores pariatur, totam quo atque accusamus ipsam! Natus non minus delectus in earum quibusdam praesentium dolores enim quos cum, sunt quisquam ab quidem. Blanditiis vero fugit asperiores quod?
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