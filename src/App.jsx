import React, { useEffect } from 'react'
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { useState } from 'react';
import { Hero } from './Components/Hero/Hero';

 const App = () => {
  let heroData=[
    {text1:"drive into",text2:"what you love"},
    {text1:"indulge",text2:"your passions"},
    {text1:"give in to",text2:"your passions"},
    {text1:"fresh honey",text2:"good health"},
  ]
  const [heroCount,setHeroCount] =useState(0);
  const [playStatus,setPlayStatus]=useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 3 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
<Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}
export default App