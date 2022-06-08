import './App.css';
import Form from './components/Form/Form';
import image from './constants/images';

function App() {
  return (
    <div className="app">
      <Form />
      <div className="logo">
        <img src={image.logo} alt="" />
      </div>
      <footer>
        <p>Terms of use | Privacy policy</p>
      </footer>
    </div>
  );
}

export default App;
