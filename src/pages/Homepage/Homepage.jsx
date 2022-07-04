import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {  chatbox, heart, home, map,  } from 'ionicons/icons'
import { Redirect, Route } from 'react-router'
import Tab1 from '../Tab1'
import Tab2 from '../Tab2'
import Tab3 from '../Tab3'


const Homepage = () => {
  return (
    <>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
          <Route path="/homepage/tab1">
           <Tab1 />
          </Route>
          <Route path="/homepage/tab2">
        <Tab2 />
          </Route>
          <Route path="/homepage/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/homepage">
            <Redirect to="/homepage/tab1" />
          </Route>
        </IonRouterOutlet>
      <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/homepage/tab1">
            <IonIcon icon={home} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/homepage/tab2">
            <IonIcon icon={map} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/homepage/tab3">
            <IonIcon icon={heart} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/homepage/tab4">
            <IonIcon icon={chatbox} />
            <IonLabel>Tab 4</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
     </IonReactRouter>
    </>
  )
}
export default Homepage;