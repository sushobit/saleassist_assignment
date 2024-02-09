import React from "react";

const Wrapper = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex p-4 flex-col md:flex-row justify-center mx-auto w-full max-w-screen-2xl md:px-16">
        <div className="flex flex-col p-8 justify-center items-start md:ml-6">
          <h3 className="text-blue-950 font-bold text-xl">
            Welcome to MediCare+ Clinic
          </h3>
          <h1 className="text-blue-950 font-bold text-4xl lg:text-6xl md:text-4xl py-2">
            Best Specialists
          </h1>
          <p className="py-4 md:pr-10 text-gray-500">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>
          <div className="flex flex-col  md:flex-row md:mt-4 items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-blue-500 w-full md:w-auto rounded-full text-white font-medium px-6 py-3">
              Make an Appointment
            </button>
            <button className="bg-white w-full md:w-auto border-solid border-2 border-sky-500 text-blue-500 font-bold px-6 py-3 rounded-full mt-4 md:mt-0">
              Departments
            </button>
          </div>
        </div>
        <div className="md:p-4 mt-4 sm:p-0">
          <div className="p-4 md:p-6 max-w-xl mx-auto sm:p-8 ">
            <img
              className="rounded-xl shadow-lg w-full md:w-auto  h-auto object-cover object-center"
              src="https://images.pexels.com/photos/6497902/pexels-photo-6497902.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
