import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonImg, IonLabel, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1 = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
      <IonImg src="assets/icon/Arrow.svg" alt="" className='img3'/>
      <IonLabel className='home1'>Hi Vecna!</IonLabel>
      <IonLabel className='home2'>Discover</IonLabel>
      <IonSearchbar placeholder="search for places" className='sb' showCancelButton="never"></IonSearchbar>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
