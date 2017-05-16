import React from 'react';
import ReactDOM from 'react-dom';
import Favourites from './Favourites';

import './index.css';

ReactDOM.render(
  <Favourites
    name="Bill Murray is now a chef or something"
    imageUrl="https://fillmurray.com/400/300"
  />,
  document.getElementById('root')
);
