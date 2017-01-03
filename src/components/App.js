import React from 'react';
// require("style-loader!raw-loader!tachyons/css/tachyons.min.css");
// require('tachyons/css/tachyons.min.css');
import Tachyons from 'tachyons/css/tachyons.min.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


const App = (props) => (
  <div>
    <Header name="Dan" />
    <Main />
    <Footer />
  </div>
);

export default App;
