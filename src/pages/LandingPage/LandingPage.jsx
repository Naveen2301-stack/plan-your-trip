import {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import "./LandingPage.css";
  const LandingPage = () => {
    
  
    return (
      <IonPage>
        <IonContent className="const">
            <img src="assets/icon/Group.svg" alt="" />
            <p className="plan">PlanTravel</p>
            <h1 className="plan1">
              Search less,
              <br />
              Travel more!
            </h1>
            <p className="plan2">Great experience at backpacker prices</p>
            <IonButton expand="full"size="default"fill="solid"color="green"className="plan3" routerLink="/signup"> CREATE AN ACCOUNT</IonButton>
            <br />
           
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
            <p className="plan5">By creating an account you agree to our</p>
            <br />
            <p className="plan6">
              <u className="plan7">Terms & Conditions </u> and agree to
              <u className="plan7"> Privacy Policy </u>
            </p>
          </IonContent>
      </IonPage>
    );
  };
  export default LandingPage;
  