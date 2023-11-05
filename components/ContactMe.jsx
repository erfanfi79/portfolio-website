"use client";
import React from "react";

const ContactMe = ({ id }) => {
  return (
    <div id={id} class="m-5 flex flex-col items-center">
      <div class="p-3 text-xl font-bold text-blue-900 sm:text-2xl">
        Contact me
      </div>
      <input
        class="input input-bordered m-1 h-10 w-2/3 bg-transparent"
        placeholder="Your Name"
      />
      <input
        class="input input-bordered m-1 h-10 w-2/3 bg-transparent"
        placeholder="Your Email"
      />
      <input
        class="input input-bordered m-1 h-10 w-2/3 bg-transparent"
        placeholder="Categories"
      />
      <textarea
        class="textarea textarea-bordered m-1 w-2/3 bg-transparent"
        placeholder="Your message"
      />
      <button class="btn w-2/3 border-hidden bg-blue-800 text-white hover:text-black">
        Submit
      </button>
    </div>
  );
};

export default ContactMe;
