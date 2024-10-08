import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ title, description, imageUrl, buttonLabel, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  // Storing card data within the App component
  const cardData = [
    {
      id: 1,
      title: 'Radish',
      description: 'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      imageUrl: '/images/smile.svg',
      buttonLabel: 'Open-Source',
    },
    {
      id: 2,
      title: 'Radish',
      description: 'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      imageUrl: '/images/smile.svg',
      buttonLabel: 'Open-Source',
    },
    {
      id: 3,
      title: 'Radish',
      description: 'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      imageUrl: '/images/smile.svg',
      buttonLabel: 'Open-Source',
    },
    {
      id: 4,
      title: 'Radish',
      description: 'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      imageUrl: '/images/smile.svg',
      buttonLabel: 'Open-Source',
    },
    {
      id: 5,
      title: 'Radish',
      description: 'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      imageUrl: '/images/smile.svg',
      buttonLabel: 'Open-Source',
    },
    {
      id: 6,
      title: 'Radish',
      description: 'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      imageUrl: '/images/smile.svg',
      buttonLabel: 'Open-Source',
    },
    {
      id: 7,
      title: 'Radish',
      description: 'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      imageUrl: '/images/smile.svg',
      buttonLabel: 'Open-Source',
    },
  ];

  const handleCardClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <>
      <div className="ml-[12rem]">
        <h1 className='text-[58px] font-semibold text-gray-300 mb-8 mt-[4rem]'>Some cool stuff I've built</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 max-w-[700px]">
          {cardData.map((card) => (
            <div key={card.id} className="relative rounded-lg border border-slate-800 bg-gradient-to-t from-slate-800 to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out">
              <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                <div className='h-10 w-10 flex items-center justify-center border border-slate-700 rounded-full mb-2'>
                  <img className="w-[25px] h-[25px]" src={card.imageUrl} />
                </div>
                <div>
                <button className="text-green-600 text-[12px] border-[1px] border-gray-500 rounded-full px-3 py-1">
                    {card.buttonLabel}
                  </button>
                </div>
                </div>
                <div className="font-semibold text-[22px] text-gray-300 mb-2">{card.title}</div>
                <p className="text-sm text-slate-400 mb-4 font-medium">{card.description}</p>
              </div>
              <div className="px-6 pb-2">
                <a
                  onClick={() => handleCardClick(card.title)}
                  className="text-blue-500 font-bold absolute right-[15px] bottom-[15px]"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
