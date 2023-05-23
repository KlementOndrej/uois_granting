import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GrantingPageProvider } from 'pages/GrantingPageProvider';
import { AppProvider } from 'pages/AppProvider';
import { GrantingProgramCard } from 'components/GrantingProgramCard';

function App() {
  return (
    <div className="App">
      
      <AppProvider>
        <GrantingPageProvider/>
      </AppProvider>
    </div>
  );
}

export default App;
