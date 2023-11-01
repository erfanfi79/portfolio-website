import React from "react";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center m-5">
      <div className="text-blue-900 font-bold p-3">Contact me</div>
      <input
        className="input input-bordered bg-transparent h-10 m-1 w-2/3"
        placeholder="Your Name"
      />
      <input
        className="input input-bordered bg-transparent h-10 m-1 w-2/3"
        placeholder="Your Name"
      />
      <input
        className="input input-bordered bg-transparent h-10 m-1 w-2/3"
        placeholder="Your Name"
      />
      <textarea
        className="textarea textarea-bordered bg-transparent m-1 w-2/3"
        placeholder="Your Name"
      />
      <button className="btn btn-primary bg-blue-900 w-2/3" >Submit</button>
    </div>
  );
};

export default ContactMe;
