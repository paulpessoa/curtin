import './App.css';
import Header from './layout/components/Header';
import Footer from './layout/components/Footer';
import Routers from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routers/>
      <Footer />
    </div>
  );
}

export default App;
