import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Signup from './pages/Signup/Signup';
import Homepage from './pages/Homepage/Homepage';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import StartingPage from './pages/StartingPage/StartingPage';
import { AuthContextProvider } from './context/AuthContext';

setupIonicReact();

const App = () => (
  <AuthContextProvider>
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
        <Route exact path="/home">
            <LandingPage />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/startingpage">
            <StartingPage />
          </Route>
          <Route exact path="homepage/tab1">
            <Tab1 />
          </Route>
          <Route exact path="homepage/tab2">
            <Tab2 />
          </Route>
          <Route path="homepage/tab3">
            <Tab3 />
          </Route>
          <Route path="homepage/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </AuthContextProvider>
);

export default App;
