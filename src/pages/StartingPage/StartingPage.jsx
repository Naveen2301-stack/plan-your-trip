import { IonContent, IonHeader, IonImg, IonLabel, IonPage, IonTitle, IonToolbar,IonInput, IonIcon,IonButton } from '@ionic/react';

import './StartingPage.css';


const StartingPage = () => {
  return (
    <IonPage>
    <IonContent >
    <IonLabel className='sp1'>Welcome to Plan Travel</IonLabel>
    <IonImg src="assets/icon/People.svg" alt = "" className='sp2'></IonImg>
    <IonButton expand="full" size="default" fill="solid"className="sp3" color="green" routerLink="/homepage">GET STARTED</IonButton>
    </IonContent>
  </IonPage>
  );
};
export default StartingPage;
