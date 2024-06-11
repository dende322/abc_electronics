import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowClient from './components/showClients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowClient></ShowClient>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
