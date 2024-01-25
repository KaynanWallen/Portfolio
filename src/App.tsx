import { useEffect } from 'react';
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'


import ReactGA4 from 'react-ga4';


function App() {
  useEffect(() => {
    // Inicialize o Google Analytics 4
    ReactGA4.initialize('G-TNEF00KY3F');

    // Registre a página inicial
    ReactGA4.send({ hitType: 'pageview', page_path: window.location.pathname });
  }, []);


  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
