import { Route } from 'react-router-dom';
import form from './components/form'


function App() {
  return (
    <div>
     <Route path='/' component={form} />
    </div>
  );
}

export default App;
