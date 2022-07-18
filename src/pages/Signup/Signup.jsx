import {
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonIcon,
  IonButton,
  useIonRouter,
  IonGrid,
  IonRow,
  useIonToast,
  useIonAlert,
  IonLoading,
  useIonLoading,
  IonCol,
} from "@ionic/react";
import { useState } from "react";
// import { calendar, lockClosed, person } from 'ionicons/icons';
import "./SignUp.css";
// import { setErrorHandler } from 'ionicons/dist/types/stencil-public-runtime';
import { UserAuth } from "../../context/AuthContext";
import { toastController } from "@ionic/core";
import { Link } from "react-router-dom";
import { alert } from "ionicons/icons";

const Signup = () => {
  const [present, dismiss] = useIonToast();
  async function handleButtonClick(message) {
    present({
      message: message,
      duration: 2000,
      position: "top",
      color: "dark-black",
      mode: "ios",
      icon: alert,
    });
  }
  const [presentAlert] = useIonAlert();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [dob, setDOB] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, currentUser } = UserAuth();
  // const [loading, setloading] = useState(false);
  const [presentloading, dismissloading] = useIonLoading();

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  //ion-router
  const router = useIonRouter();

  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "ios",
      color: "dark-black",
    });
  }

  const handleSubmit = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (
      name == null ||
      name === "" ||
      email == null ||
      email === "" ||
      password == null ||
      password === ""
    ) {
      handleButtonClick("please fill the required fields");
    } else if (password.length < 6) {
      handleButtonClick("Password must be of atleast 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please enter valid email address");
    } else {
      // e.preventDefault()
      // setError('')
      try {
        presentloading({
          message: "SigningUp!...",
          duration: 3000,
          spinner: "crescent",
          mode: "md",
          cssClass: "sp-spinner",
        });

        await createUser(email, password);
        handleButtonClick(name + "  " + "user sucessfully registered");
        clearInputs();
        dismissloading();
        router.push("/login");
      } catch (e) {
        dismissloading();
        setError(e.message);
        clearInputs();
        console.log(e.message);
      }
    }
  };

  // if(loading){
  //   return <IonLoading isOpen = {loading} onDidDismiss={() => setloading(false)} message={'SigningUp!...'} duration={3000} mode= "ios" spinner="bubbles"/>
  // }
  return (
    <IonPage>
      <IonContent className="const1">
        <IonGrid className="signup-grid">
          <IonRow className="signup-row ">
            <IonLabel color="dark-black">Create Your Account!</IonLabel>
          </IonRow>
          <IonRow className="signup-text-row">
            <IonLabel color="dark-black">
              Signup to keep Exploring amazing{" "}
            </IonLabel>
            <IonLabel color="dark-black">
              destinations around the world!
            </IonLabel>
          </IonRow>
          <IonRow className="signup-text-row1">
            <IonInput
              type="text"
              className="sign3"
              value={name}
              placeholder="Name"
              color="dark-black"
              onIonChange={(e) => setName(e.target.value)}
            />
            <IonInput
              type="email"
              className="sign3"
              value={email}
              placeholder="Email Adress"
              color="dark-black"
              onIonChange={(e) => setEmail(e.target.value)}
            />
            <IonInput
              type="password"
              className="sign3"
              value={password}
              placeholder="set password"
              color="dark-black"
              onIonChange={(e) => setPassword(e.target.value)}
            />
          </IonRow>
          <IonRow className="signup-page-btn">
            <IonButton
              expand="full"
              size="default"
              fill="solid"
              color="dark-black"
              className="sign7"
              shape="round"
              onClick={handleSubmit}
            >
              {" "}
              sign up
            </IonButton>
          </IonRow>
          <IonRow className="sign8">
            <IonLabel>or</IonLabel>
          </IonRow>
          <IonRow className="social-row">
            <IonLabel className="signup9">Signup using</IonLabel>
          </IonRow>
          <IonRow className="google-btn-row">
            <IonCol className="svg-col">
              <IonButton className="google-btn" fill="clear">
                <IonImg className="google-img" src="assets/icon/google.svg"/>
              </IonButton>
            </IonCol>

            <IonCol className="fb-img-col">
              <IonButton className="facebook-btn" fill="clear">
                <IonImg className="face-img" src="assets/icon/facebook.svg" />
              </IonButton>
            </IonCol>
          </IonRow>
          {/* <IonRow className='google-row'>
          <IonImg src="assets/icon/google.svg" />
        </IonRow> */}
          <IonRow className="signup-text-row4">
            <IonLabel className="sign12" color="dark-black">
              Already have an account ? <Link to="/login"> Login</Link>{" "}
            </IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
