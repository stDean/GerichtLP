import { NavBar } from './components';
import {
  About, Chef, FindUs, Footer, Gallery,
  Header, Intro, Laurels, Menu
} from './container';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
