import React from 'react';

// Portfolio component provides project name,image,github repo and live website url
function Portfolio() {
  return (
    <section className="portfolio">
      <div className='row' >

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/ACC-Game-Finder.png")}
              alt='basketball'
              className='image'
            />
            <div className='card-body'>
              <h6>ACC-Game-Finder</h6>
              <a href=' https://github.com/Mikekuney/ACC-Game-Finder' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://Mikekuney.github.io/ACC-Game-Finder/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/Gather.png")}
              alt='Gather'
              className='image'
            />
            <div className='card-body'>
              <h6>Gather</h6>
              <a href='https://github.com/chardmuffin/improved-invention' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://intense-spire-57232.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/CDimage1.png")}
              alt='Chasing-Dreams'
              className='image'
            />
            <div className='card-body'>
              <h6>Chasing-Dreams</h6>
              <a href='https://github.com/Mikekuney/Chasing-Dreams' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://chasing-dreams.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/Budget.png")}
              alt='Budget'
              className='image'
            />
            <div className='card-body'>
              <h6>Budget-Trakr-PWA</h6>
              <a href='https://github.com/Mikekuney/Budget-Trakr-PWA' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://stark-eyrie-71366.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/PassGen1.png")}
              alt='Password'
              className='image'
            />
            <div className='card-body'>
              <h6>Password-Generator</h6>
              <a href='https://github.com/Mikekuney/Password-Generator' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://mikekuney.github.io/Password-Generator/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/BSimage2.png")}
              alt='BookSearch'
              className='image'
            />
            <div className='card-body'>
              <h6>Book-Search-Engine</h6>
              <a href='https://github.com/Mikekuney/Book-Search-Engine' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://floating-cove-86387.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export default Portfolio;