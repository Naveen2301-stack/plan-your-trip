import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonText,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
  useIonToast,
  IonLabel,
} from "@ionic/react";
import { doc, onSnapshot } from "firebase/firestore";
import {
  alert,
  arrowForwardOutline,
  chevronForwardOutline,
  ellipsisVerticalOutline,
  headsetOutline,
  heart,
  heartOutline,
  helpCircleOutline,
  readerOutline,
  receiptOutline,
  refreshOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { auth, db } from "../firebase";
//

import "./Tab4.css";

const Tab4 = () => {
  const { logout } = UserAuth();
  const router = useIonRouter();
  const [present] = useIonToast();
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });

  async function handleButtonClick(m) {
    present({
      message: m,
      duration: 2000,
      position: "top",
      color: "dark-black",
      mode: "ios",
      icon: alert,
    });
  }

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
      window.location.reload();

      handleButtonClick("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", auth.currentUser.uid), (doc) => {
      let name;
      let email;
      if (doc.exists()) {
        console.log(doc.data());
        name = doc.data().name;
        email = doc.data().email;
        setDetails({ name, email });
      }
    });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar color={"danger"} className="">
            <IonButtons slot="ion-float-left">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle className="ion-text-center">My Account</IonTitle>
            <IonButtons slot="end">
              <IonIcon
                icon={ellipsisVerticalOutline}
                className="heart-icon"
              ></IonIcon>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow className="ion-justify-content-center ion-padding">
            <IonCol>
              <IonAvatar style={{ margin: "auto" }}>
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
                  alt="prfile"
                ></img>
              </IonAvatar>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center">
              <IonLabel>{details.email}</IonLabel>
            </IonCol>
          </IonRow>
         
          <IonRow>
            <IonCol className="ion-text-center">
              <IonLabel>{details.name}</IonLabel>
            </IonCol>
          </IonRow>
          

          <IonRow>
            <IonCol className="ion-text-center ion-padding-top">
              <IonIcon icon={heartOutline} className="ion-float-left"></IonIcon>
              <IonText>Account information</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                className="ion-float-right"
              ></IonIcon>
            </IonCol>
          </IonRow>
          <hr style={{ border: "1px solid black" }} />

          <IonRow>
            <IonCol className="ion-text-center ion-padding-top">
              <IonIcon
                icon={readerOutline}
                className="ion-float-left"
              ></IonIcon>
              <IonText>Your Promotion</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                className="ion-float-right"
              ></IonIcon>
            </IonCol>
          </IonRow>
          <hr style={{ border: "0.1px solid black" }} />

          <IonRow>
            <IonCol className="ion-text-center ion-padding-top">
              <IonIcon
                icon={receiptOutline}
                className="ion-float-left"
              ></IonIcon>
              <IonText>order history</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                className="ion-float-right"
              ></IonIcon>
            </IonCol>
          </IonRow>
          <hr style={{ border: "1px solid black" }} />

          <IonRow>
            <IonCol className="ion-text-center ion-padding-top">
              <IonIcon
                icon={refreshOutline}
                className="ion-float-left"
              ></IonIcon>
              <IonText>change Password</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                className="ion-float-right"
              ></IonIcon>
            </IonCol>
          </IonRow>
          <hr style={{ border: "1px solid black" }} />

          <IonRow>
            <IonCol className="ion-text-center ion-padding-top">
              <IonIcon
                icon={helpCircleOutline}
                className="ion-float-left"
              ></IonIcon>
              <IonText onClick={handleLogout}>Sign out</IonText>
              <IonIcon
                icon={chevronForwardOutline}
                className="ion-float-right"
              ></IonIcon>
            </IonCol>
          </IonRow>
          <hr style={{ border: "1px solid black" }} />
        </IonGrid>

        {/* <IonGrid>
          <IonRow>
            <IonButton onClick={handleLogout}>Logout</IonButton>
          </IonRow>
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
