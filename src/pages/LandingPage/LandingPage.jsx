import {
  IonButton,
  IonContent,
  IonPage,
  IonGrid,
  IonImg,
  IonRow,
  IonLabel,
} from "@ionic/react";
// import { Link } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <IonPage>
      <IonContent className="const">
        <IonGrid className="grid8">
          <IonRow className="landing-row">
            <IonImg src="assets/icon/plane.svg" className="img" alt="" />

            <IonLabel className="plan">PlanTravel</IonLabel>
          </IonRow>

          <IonRow className="text-row">
            <IonLabel color="dark-black">Search less,</IonLabel>
            <IonLabel color="dark-black">travel more</IonLabel>
          </IonRow>

          <IonRow className="text-row2">
            <IonLabel color="dark-black">
              Great experience at backpacker prices
            </IonLabel>
          </IonRow>

          <IonRow className="create-acnt-btn">
            <IonButton
              expand="block"
              size="default"
              shape="round"
              fill="solid"
              color="dark-black"
              routerLink="/signup"
              className="ion-text-capitalize plan3"
            >
              {" "}
              Create An Account
            </IonButton>
            <IonButton
              expand="block"
              size="default"
              fill="solid"
              color="white"
              className="ion-text-capitalize plan4"
              routerLink="/login"
              shape="round"
            >
              {" "}
              Log In{" "}
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default LandingPage;
