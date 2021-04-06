import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Prospect from "./pages/Prospect";

import { AuthProvider } from './context/Auth';
import AuthRoute from './util/AuthRoute';
import PersonalInfo from "./components/PersonalInfo";
import DriverInfo from "./pages/DriverInfo";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Switch>
            <AuthRoute exact path="/" component={Login}/>
            <AuthRoute  path="/register" component={Register}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/:username" component={Prospect}/>
            <Route path="/personal-info/:username" component={PersonalInfo}/>
            <Route path="/driver-info/:username" component={DriverInfo}/>
          </Switch>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
