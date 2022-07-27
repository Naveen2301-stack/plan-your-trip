import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { alert, arrowForwardOutline, chevronForwardOutline, ellipsisVerticalOutline, headsetOutline, heartOutline, readerOutline } from "ionicons/icons";
//

import "./Tab4.css";

const Tab4 = () => {
  // const { logout } = UserAuth();
  // const router = useIonRouter();
  // const [present] = useIonToast();

  // async function handleButtonClick(m) {
  //   present({
  //     message: m,
  //     duration: 2000,
  //     position: "top",
  //     color: "dark-black",
  //     mode: "ios",
  //     icon: alert,
  //   });
  // }

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     router.push("/login");
  //     window.location.reload();

  //     handleButtonClick("You are logged out");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonHeader>
              <IonToolbar color={"danger"} className="">
                <IonButtons slot="start">
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
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonItem>
              {/* <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar> */}
              <IonIcon icon={heartOutline} slot = "start"></IonIcon>
              <IonIcon icon = {chevronForwardOutline} slot= "end"></IonIcon>
              <IonLabel>Account information</IonLabel>
            </IonItem>
          </IonRow>

          <IonRow>
          <IonItem>
              {/* <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar> */}
                <IonIcon icon={readerOutline} slot = "start"></IonIcon>
              <IonLabel>Your Promotion</IonLabel>
              <IonIcon icon = {chevronForwardOutline} slot= "end"></IonIcon>
            </IonItem>
          </IonRow>
           
          <IonRow>
          <IonItem>
              {/* <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar> */}
              <IonLabel>order history</IonLabel>
              <IonIcon icon = {chevronForwardOutline} slot= "end"></IonIcon>
            </IonItem>
          </IonRow>

           
          <IonRow>
          <IonItem>
              {/* <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar> */}
              <IonLabel>change Password</IonLabel>
              <IonIcon icon = {chevronForwardOutline} slot= "end"></IonIcon>
            </IonItem>
          </IonRow>

           
          <IonRow>
          <IonItem>
              {/* <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar> */}
              <IonLabel>Sign out</IonLabel>
              <IonIcon icon = {chevronForwardOutline} slot= "end"></IonIcon>
            </IonItem>
          </IonRow>

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
