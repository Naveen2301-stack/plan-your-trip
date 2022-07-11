import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonLabel,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
// import country from '../../public/assets/images/Group 92.png'

const Tab1 = () => {
  return (
    <IonPage>
      <IonContent className="tab1">
        <IonGrid className="tab1-grid">
          <IonRow className="home-back-button-row">
            <IonImg src="assets/icon/Arrow.svg" alt=""  />
            <IonLabel className="v1" >Hi Vecna!</IonLabel>
          </IonRow>
         
            <IonRow className="hi-text">
              <IonLabel >Discover</IonLabel>
            </IonRow>
         

          <IonRow>
            <IonSearchbar
              placeholder="search for places"
              className="sb"
              showCancelButton="never"
            ></IonSearchbar>
          </IonRow>
          <IonRow className="card-row">
            <IonCard className="card1">
              <IonImg className="img-img" src="assets/images/Group 92.png"></IonImg>
              <IonLabel>
                Countries
              </IonLabel>

            </IonCard>
            
            <IonCard className="card2">
              <IonImg className="img-img" src="assets/images/bxs_camera.png"></IonImg>
              <IonLabel>
                Sights
              </IonLabel>

            </IonCard>
            <IonCard className="card3">
              <IonRow className="row2">
              <IonImg className="img-img  " src="assets/images/train.png"></IonImg>
             
       
              <IonLabel>
               Tours
              </IonLabel>
              </IonRow>
             

            </IonCard>
            
          </IonRow>
          <IonRow className="pd">
              <IonLabel className="pd1" >Popular Destinations</IonLabel>
              <IonLabel className="pd2">See all</IonLabel>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
