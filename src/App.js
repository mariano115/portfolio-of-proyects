import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/HomePage'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
