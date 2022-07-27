import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {  heart, home, map, personCircle, settings } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import ProtectedRoute from "../../components/ProtectedRoute";
import Tab1 from "../Tab1";
import Tab2 from "../Tab2";
import Tab3 from "../Tab3";
import Tab4 from "../Tab4";

const Homepage = () => {
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/homepage/tab1">
              <ProtectedRoute>
                <Tab1 />
              </ProtectedRoute>
            </Route>
            <Route path="/homepage/tab2">
              <ProtectedRoute>
                <Tab2 />
              </ProtectedRoute>
            </Route>
            <Route path="/homepage/tab3">
              <ProtectedRoute>
                <Tab3 />
              </ProtectedRoute>
            </Route>
            <Route path="/homepage/tab4">
              <ProtectedRoute>
                <Tab4 />
              </ProtectedRoute>
            </Route>
            <Route exact path="/homepage">
              <Redirect to="/homepage/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/homepage/tab1">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/homepage/tab2">
              <IonIcon icon={map} />
              <IonLabel>Maps</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/homepage/tab3">
              <IonIcon icon={heart} />
              <IonLabel>Favourite</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/homepage/tab4">
              <IonIcon icon={personCircle} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </>
  );
};
export default Homepage;
