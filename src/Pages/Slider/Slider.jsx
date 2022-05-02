import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slider = () => {

    const images = [
        { url: "https://cdn.pixabay.com/photo/2022/01/08/03/36/snake-6923158__340.jpg" },
        { url: "https://cdn.pixabay.com/photo/2022/01/10/16/18/sea-arch-6928714__340.jpg" },
        { url: "https://cdn.pixabay.com/photo/2022/03/24/19/57/sheep-7089786__340.jpg" },
        { url: "https://cdn.pixabay.com/photo/2022/04/23/12/59/bird-7151692__340.jpg" },
        { url: "https://cdn.pixabay.com/photo/2021/10/14/11/40/sea-6708858__340.jpg" },
      
      ];
  return (
    <div className='container bg-info w-50 ml-0 mr-0 mx-auto text-center'>
      <div className="slide-container">
        <Slide>
         {Slider.map((Slider, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${Slider.url})`}}>
                <span>{Slider.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>
  )
}

export default Slider