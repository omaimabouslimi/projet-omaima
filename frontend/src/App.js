
import { Route, Routes } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/login" element={<Connexion/>}/>
      </Routes>
    </div>
  );
}

export default App;
