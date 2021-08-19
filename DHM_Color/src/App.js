import React, { useState, useEffect } from 'react';

import apiRequest from './api/productApi';
import apiRequestCt from './api/categoryApi';
import apiRequestCart from './api/cartApi';
import apiRequestPs from './api/postApi';
import apiRequestSize from './api/sizeApi';
import apiRequestColor from './api/colorApi';
import userApi from './api/userApi'
import Routers from './routers/index'
import Swal from 'sweetalert2';
import { history } from "./helpers/history";

function App() {






  return (
    <div className="App">
      <Routers
      />

    </div>
  )

}
export default App;