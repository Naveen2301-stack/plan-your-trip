import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  isPlatform,
  setupIonicReact,
  useIonAlert,
  useIonToast
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
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
import { useEffect, useState } from 'react';
import {  doc, getDoc } from "firebase/firestore"; 
import { db } from "./firebase";
import { Browser } from '@capacitor/browser';
import { App as app} from '@capacitor/app';


setupIonicReact();

const App = () => {
  const [updateDetails,setUpdateDetails] = useState({});
  const [appVersion, setAppVersion] = useState("");

  const updateRef = doc(db, "plantravel_app_config", "RbHsE8tIW3Dk1wo4Jc44");
  
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();


  const handleToast = (msg) => {
    present({
      message: msg,
      position: "top",
      animated: true,
      duration: 2000,
      color: "dark-black",
      mode: "ios",
    });
  };

  const handleAlert = (msg, title, btn, appVersion) => {
    presentAlert({
      header: title,
      subHeader: `Version: ${appVersion}`,
      message: msg,
      buttons: [
        {
          text: btn,
          role: "Download",
          handler: async () => {
            handleToast("Download Clicked");
            await Browser.open({
              url: "https://play.google.com/store/apps/details?id=com.planyourtrip.app",
            });
          },
        },
      ],
      backdropDismiss: true,
      translucent: true,
      animated: true,
      // cssClass: "lp-sp-alert",
    });
  };

  const getAppInfo = async () => {
    let info = await app.getInfo();
    return info;
  };

  const getConfigData = async () => {
    const docSnap = await getDoc(updateRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", docSnap.data());
      setUpdateDetails(data.updateMsg);
      setAppVersion(data.current);
    } else {
      console.log("No such document!");
    }
  };
  const checkUpdate = async () => {
    try {
      if (isPlatform("android")) {
        const currentAppInfo = getAppInfo();
        if (appVersion > (await currentAppInfo).version) {
          const msg = updateDetails.msg;
          const title = updateDetails.title;
          const btn = updateDetails.btn;
          handleAlert(msg, title, btn, appVersion);
        }
      } 
      // else {
      //   const msg = "App is not running on android platform";
      //   handleToast(msg);
      // }
    } 
    catch (error) {
      // handleAlert(error.message);
    }
  };

  useEffect(() => {
    getConfigData();
    if (isPlatform("android")){
      getAppInfo();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    checkUpdate();

    return(
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
    )
};

export default App;
