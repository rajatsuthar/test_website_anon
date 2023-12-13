import React from 'react'
import './WhatGPT3.css';
import Feature from '../../components/feature/Feature';

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>  
          <Feature title="What About This" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, molestiae! Harum nemo quo maxime asperiores voluptatem modi quod.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, molestiae! Harum nemo quo maxime asperiores voluptatem modi quod."/>
          
      </div>
      <div className='gpt3__whatgpt3-heading'>
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>

      <Feature title="Feature 1" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Feature 2" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Feature 3" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatGPT3