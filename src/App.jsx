import React, { useState } from 'react'
import Buttons from './components/Buttons';

function App() {
  const colors = ["red", "green", "blue", "olive", "gray", "black", "yellow"];
  const [color, setColor] = useState("olive");
  return (
    <div
      className='w-full h-screen duration-200'
      style={{
        backgroundColor: color
      }}> 

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          {
            colors.map(function (c) {
              return (
                <React.Fragment key={c}>              
                  <Buttons colorName={c} setColor={setColor}></Buttons>
                </React.Fragment>  
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default App
