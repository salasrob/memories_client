// ----------- statless components ---------------
import Header from './components/Stateless/Header';
import Footer from './components/Stateless/Footer';
// ----------- pages ----------------------------
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';
import EventCreatePage from './pages/EventCreatePage';
import UserAccountPage from './pages/UserAccountPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <SplashPage/>
      <LoginPage/>
      <EventCreatePage/>
      <UserAccountPage/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
