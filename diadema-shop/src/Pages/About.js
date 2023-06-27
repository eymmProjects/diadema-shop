import React from "react";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-lg flex flex-col md:flex-row md:items-center mx-auto">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="images/about_img.png"
            alt=""
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
        <div className="md:w-1/2 pl-[30px]">
          <h2 className="text-gray-900 dark:text-white text-xl font-extrabold tracking-tight mb-[1rem]">
            Are The Best Ones
          </h2>
          <p className="text-gray500 dark:text-gray400 leading-relaxed text-base mb-[2rem] font-light">
            In this reinvented flick, which hovers like a Matisse cutout between
            the lashline and brow bone, curved crease of the eyelid, while the
            top is a long, flat line that extends past the outer corners.
          </p>

          <Link
            to="#"
            class="inline-flex items-center justify-center border border-gray300 hover:bg-gray100 focus-ring ring-offset-current transition ease-in-out duration-[300ms] rounded-lg text-sm font-medium px-[10px] py-[7.5px] text-black focus:-outline-none bg-white dark:text-white dark:border-accent-green-dark "
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};
