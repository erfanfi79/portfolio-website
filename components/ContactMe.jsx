"use client"
import React from "react";

const ContactMe = ({ id }) => {
  return (
    <div id={id} className="flex flex-col items-center m-5">
      <div className="text-blue-900 font-bold p-3">Contact me</div>
      <input
        className="input input-bordered bg-transparent h-10 m-1 w-2/3"
        placeholder="Your Name"
      />
      <input
        className="input input-bordered bg-transparent h-10 m-1 w-2/3"
        placeholder="Your Email"
      />
      <input
        className="input input-bordered bg-transparent h-10 m-1 w-2/3"
        placeholder="Categories"
      />
      <textarea
        className="textarea textarea-bordered bg-transparent m-1 w-2/3"
        placeholder="Your message"
      />
      <button className="btn bg-blue-800 border-hidden text-white hover:text-black w-2/3">
        Submit
      </button>
    </div>
  );
};

export default ContactMe;
