import React from 'react'
import Card from '../Card/Card';

const Services = () => {
    const data = [
        {
          id: 1,
          name: 'Dr. Awaatif Al',
          profession: 'Dental Care',
          image: 'https://media.istockphoto.com/id/1272841506/photo/handsome-modern-indian-asian-doctor-with-stethoscope-in-uniform-nmedicine-healthcare-and.jpg?s=612x612&w=0&k=20&c=lVkm-dmjHVqxswSDpTgd_m_ljGBh9edJKN9NamjnZMg=', // Replace with your image URL
        },
        {
          id: 2,
          name: 'Dr. Filipa Gaspar',
          profession: 'Cardiology',
          image: 'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=V04CGZ3T6Zs4UXuw8XmDSs_whtC8VPtdszOZULeRdK0=', 
        },
        {
          id: 3,
          name: 'Dr. Sukhmeet Gorae',
          profession: 'Neurological',
          image: 'https://media.istockphoto.com/id/1080237358/photo/indian-male-doctor-on-blue-background-stock-image.jpg?b=1&s=612x612&w=0&k=20&c=NUnwSlQvIfhCrpQcEDD1zYXoqijbmmNFUiNgLhXGh3k=',
        },
        {
          id: 4,
          name: 'Dr. Siri Jakobsson',
          profession: 'Prediatrics',
          image: 'https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?b=1&s=612x612&w=0&k=20&c=JBkrfGirsQLvIrn_IF4OtnaxFmWLN4xLGhzftOlAEJg=',
        },
        
      ];
  return (
    <>
    <div className='bg-blue-50'>
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-blue-950">
          We Have The Best Specialists
        </h1>
        <p className="text-base sm:text-md md:text-md lg:text-lg xl:text-xl text-gray-600 mt-6">
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>
      </div>

       <div className="flex flex-wrap justify-center mx-16 ">
      {data.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <Card {...item} />
        </div>
      ))}
    </div>
      </div>
      </div>
    </>
  )
}

export default Services