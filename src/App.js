import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import people from './data';

import Title from './Title';
import Slider from './Slider';

const App = () => {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0)
    } 
  }, [index]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000)

    return () => clearInterval(slider)
  }, [index])


  return (
    <section className="section">
      <Title />

      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id, image, title, quote, name} = person;
          let position = 'nextSlide';
          if (index === personIndex) {
            position = 'activeSlide'
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide'
          }

          return (
            <Slider 
            key={id}
            image={image}
            position={position}
            name={name}
            title={title}
            quote={quote}
            />
          )
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  ) 

}

export default App;
