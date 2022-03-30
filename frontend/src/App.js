import './App.css';
import { BrowserRouter, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';
import LandingPage from './screens/Landing/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const App = () => (
    <BrowserRouter>
    <Header />
    <main>
      <Route exact path='/' component={ LandingPage } />
      <Route exact path='/login' component={ LoginScreen } />
      <Route exact path='/register' component={ RegisterScreen } />
      <Route exact path='/mynotes' component={() => <MyNotes /> } />
    </main>
      <Footer />
    </BrowserRouter>
);


export default App;
