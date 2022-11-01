import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BaiTapDatGhe from './BaiTapDatVe/BaiTapDatGhe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
    <Routes>
       <Route path='' element={<BaiTapDatGhe/>}></Route>
    </Routes>
  
  
  </BrowserRouter>
);

