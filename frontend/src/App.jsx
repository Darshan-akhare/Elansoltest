
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Loginpage.jsx';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './pages/DashboardPage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;