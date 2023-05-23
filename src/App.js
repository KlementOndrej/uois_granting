import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GrantingPageProvider } from 'pages/GrantingPageProvider';
import { AppProvider } from 'pages/AppProvider';
import { GrantingPage } from 'pages/GrantingPage';

function App() {
  return (
    <div className="App">
      
      <AppProvider>
        <GrantingPage/>
      </AppProvider>
    </div>
  );
}

export default App;
