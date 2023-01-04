import React, { useState } from 'react'
import Navbar from './components/Navbar'

import {
  BrowserRouter, Routes,
  Route,


} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Newscomponent from './components/Newscomponent';



const App =()=> {

  const[progress , setProgress]=useState(0);
  // state=()=>{
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   setState(progress)
  // }



 
    return (
      <div>

        <LoadingBar
          color='#f11946'
          progress={progress}
          
        />
        <Navbar />

        {

          // <Newscomponent setProgress={this.setProgress} pageSize={6} country='in' category='general' />

          <BrowserRouter>
            <Routes>

              {/* <Newscomponent setProgress={this.setProgress} pageSize={6} country='in' category='general' /> */}
              <Route path="/" element={<Newscomponent setProgress={setProgress} pageSize={6} country="in" category='general' />} />
              <Route path="/business" element={<Newscomponent setProgress={setProgress} pageSize={6} country="in" category="business" />} />
              <Route path="/entertainment" element={<Newscomponent setProgress={setProgress} pageSize={6} country="in" category="entertainment" />} />
              <Route path="/science" element={<Newscomponent setProgress={setProgress} pageSize={6} country="in" category="science" />} />
              <Route path="/sports" element={<Newscomponent setProgress={setProgress} pageSize={6} country="in" category="sports" />} />
              <Route path="/health" element={<Newscomponent setProgress={setProgress} pageSize={6} country="in" category="health" />} />
              <Route path="/technology" element={<Newscomponent setProgress={setProgress} pageSize={6} country="in" category="technology" />} />



            </Routes>

          </BrowserRouter>
        }
      </div>
    )
  
}

export default App
