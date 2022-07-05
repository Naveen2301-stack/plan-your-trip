import {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonImg,
    IonRow,
    IonCol,
    IonLabel
  } from "@ionic/react";
import { Link } from "react-router-dom";
  import "./LandingPage.css";
  const LandingPage = () => {
    
  
    return (
      <IonPage>
        <IonContent className="const">
          <IonGrid>
            <IonRow className="signup-row">

            <IonImg src="assets/icon/Group.svg" alt="" className="img" />
      
              <IonLabel className="plan">PlanTravel</IonLabel>
           
            </IonRow>

                <IonRow className="text-row">
            <IonLabel >Search less,</IonLabel>
            </IonRow>

            <IonRow className="text-row1">
              <IonLabel >travel more</IonLabel>
              </IonRow>

            <IonRow className="text-row2">
            <IonLabel >Great experience at backpacker prices</IonLabel>
            </IonRow>

            <IonRow className="create-acnt-btn">
            <IonButton expand="full"size="default"fill="solid"color="green"routerLink="/signup" className="plan3"> CREATE AN ACCOUNT</IonButton>
           
            </IonRow>
           <IonRow className="login-acnt-btn">
            <IonButton
              expand="full"
              size="default"
              fill="solid"
              color="light"
              className="plan4"
              routerLink="/login"
            >
              LOG IN
            </IonButton>
            </IonRow>
            <IonRow className="plan5">
             <IonLabel >By creating an account you agree to our</IonLabel>
           </IonRow>
           <IonRow className="lp-last-text" >
            
              <IonLabel ><Link>Terms & Conditions</Link> and agree to <Link>Privacy Policy</Link> </IonLabel>
             
            </IonRow>
            </IonGrid>
          </IonContent>
      </IonPage>
    );
  };
  export default LandingPage;
  