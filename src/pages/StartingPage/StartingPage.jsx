import { IonContent, IonHeader, IonImg, IonLabel, IonPage, IonTitle, IonToolbar,IonInput, IonIcon,IonButton, IonGrid, IonRow } from '@ionic/react';

import './StartingPage.css';


const StartingPage = () => {
  return (
    <IonPage className='startingpage-grid'>
    <IonContent className='const4'>
      <IonGrid>
      <IonRow className='startingpage-text'>
    <IonLabel >Welcome to PlanTravel</IonLabel>
    </IonRow>
<IonRow className='signup-logo'>
    <IonImg src="assets/icon/People.svg" alt = "" className='sp2'></IonImg>
    </IonRow>
    <IonRow className='get-started-btn'>
    <IonButton expand="full" size="default" fill="solid"className=" ion-text-capitalize sp3" color="dark-black" routerLink="/homepage" shape="round">Get Started</IonButton>
    </IonRow>
    </IonGrid>
    </IonContent>
  </IonPage>
  );
};
export default StartingPage;
