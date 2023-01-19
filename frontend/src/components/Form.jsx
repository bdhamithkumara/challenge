import React, { useRef } from "react";
import pic from "../img/profile.png";
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ getAllComments }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    await axios
      .post("http://localhost:8800/", {
        comment: user.comment.value,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));

    user.comment.value = "";

    getAllComments();
  };

  return (
    <>
      <div className="mb-10">
        <div className="flex  justify-between lg:flex-col lg:gap-7 ">
          <div>
            <h1 className="text-4xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-slate-900">
              Discussion
            </h1>
          </div>
          <form
            className="flex items-center justify-center relative"
            ref={ref}
            onSubmit={handleSubmit}
          >
            <img src={pic} alt="" className="w-12 h-12" />
            <input
              placeholder="What are your thoughts?"
              name="comment"
              type="text"
              className="py-2 px-5 ring-1 ring-slate-300 flex items-center  w-96 lg:w-[85vw] text-base rounded-sm relative placeholder:text-slate-500 mx-5"
            />

            <button
              className="text-base px-5 py-2 text-white bg-[#7E34F6] 
                 rounded-sm  right-0 "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <hr className="h-px my-8  dark:bg-gray-900" />
      </div>
    </>
  );
};

export default Form;
