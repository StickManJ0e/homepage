import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
