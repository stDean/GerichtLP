import { NavBar } from './components';
import { About, Chef, Header, Intro, Laurels, Menu } from './container';

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
    </>
  );
}

export default App;
