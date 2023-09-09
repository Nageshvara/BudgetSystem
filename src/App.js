import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import './default.css';
import Navigation from './navigation';
import Header from './header';
import Subheader from './subheader';
import Iconsfeature from './iconsfeature';
import Imagenav from './imagenav';
import Footer from './footer';
import 'https://code.jquery.com/jquery-3.2.1.min.js';



function App() {
  
  return(<>
    {/* Required meta tags */}
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/*navigation*/}
    <Navigation/>

    {/*header*/}
    <Header />
    
    {/* features section */}
    <section className="pt-6 pb-7" id="features">
      <div className="container">
        <Subheader/>
        <Iconsfeature/>
        <Imagenav/>
      </div>
    </section>

    {/*footer*/}
    <Footer/>
  </>
  );
}

export default App;
