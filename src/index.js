import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BaiTapDatGhe from './BaiTapDatVe/BaiTapDatGhe';
import {Provider} from 'react-redux'
import { store } from './ReDux/ConfigStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
  
  <Routes>
     <Route path='' element={<BaiTapDatGhe/>}></Route>
  </Routes>


</BrowserRouter>
  </Provider>
  
);

