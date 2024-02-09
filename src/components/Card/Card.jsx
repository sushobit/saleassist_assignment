import React from 'react';

const Card = ({id, image, name, profession }) => {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto my-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
        <img
          className="w-full h-80 object-cover object-center"
          src={image}
          alt={name}
        />
        <div className="p-4 flex flex-col justify-start items-start">
          <h3 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl font-semibold text-gray-800">
            {name}
          </h3>
          <p className="text-sm sm:text-base md:text-md lg:text-md xl:text-md text-gray-600">
            {profession}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
