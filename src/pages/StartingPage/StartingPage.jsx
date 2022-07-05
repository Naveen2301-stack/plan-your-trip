import { IonContent, IonHeader, IonImg, IonLabel, IonPage, IonTitle, IonToolbar,IonInput, IonIcon,IonButton, IonGrid, IonRow } from '@ionic/react';

import './StartingPage.css';


const StartingPage = () => {
  return (
    <IonPage className='startingpage-grid'>
    <IonContent className='const4'>
      <IonGrid>
      <IonRow className='startingpage-text'>
    <IonLabel >Welcome to Plan Travel</IonLabel>
    </IonRow>
    <IonImg src="assets/icon/People.svg" alt = "" className='sp2'></IonImg>
    <IonButton expand="full" size="default" fill="solid"className="sp3" color="green" routerLink="/homepage">GET STARTED</IonButton>
    </IonGrid>
    </IonContent>
  </IonPage>
  );
};
export default StartingPage;
