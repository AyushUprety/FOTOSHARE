import React from "react";
import {Routes,Route,userNavigate} from 'react-router-dom'

const App = ()=>{
    return(
        <Routes>
            <Route path='/login' element={<login/>}/>
            <Route path='/*' element={<home/>} />
        </Routes>
           
        
    )
}
export default App;