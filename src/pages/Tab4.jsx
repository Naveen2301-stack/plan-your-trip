import {
  IonButton,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  useIonRouter,
  useIonToast,
} from "@ionic/react";
import { alert } from "ionicons/icons";
import { UserAuth } from "../context/AuthContext";
import "./Tab4.css";

const Tab4 = () => {
  const { logout } = UserAuth();
  const router = useIonRouter();
  const [present] = useIonToast();

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

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonButton onClick={handleLogout}>Logout</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
