import {
  IonContent,
  IonPage,
  IonImg,
  IonLabel,
  IonInput,
  IonButton,
  useIonRouter,
  IonGrid,
  IonRow,
  useIonToast,
  useIonAlert,
  useIonLoading,
  IonCol,
} from "@ionic/react";
import { alert} from "ionicons/icons";
import { useState } from "react";
import "./Login.css";
import { UserAuth } from "../../context/AuthContext";
// import { toastController } from "@ionic/core";
import { Link } from "react-router-dom";
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'

const Login = () => {
  const { login, } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ setError] = useState("");
  const [present] = useIonToast();
  const [presentAlert] = useIonAlert();
  const [presentloading, dismissloading] = useIonLoading();


  
  // const throwKnownError = () => 
  // {
  //   throw new Error("this is an sentry error")
  // }


  // function for clearing inputs
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

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
  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK", "cancel"],
      mode: "ios",
      animated: true,
      // cssClass: 'loginpage-alert',
      color: "dark-black",
    });
  }

  // const signInGoogle = async () => {

  //   GoogleAuth.initialize();

  //   const result = await GoogleAuth.signIn();
  //   console.log(result);
  //   // console.info('result', result);
  //   if (result) {

  //     router.push("/startingpage");

  //     console.log(result);
  //   }

  // }

  const router = useIonRouter();

  const handleSubmit = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (email == null || email === "" || password == null || password === "") {
      handleButtonClick("Please Fill the required fields");
    } else if (password.length < 6) {
      handleButtonClick("Password length must be of 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please entera valid email address");
    } else {
      try {
        presentloading({
          message: "Logging In!...",
          duration: 3000,
          spinner: "crescent",
          mode: "md",
          cssClass: "lp-spinner",
        });
        await login(email, password);
        dismissloading();
        handleButtonClick("user logged in successful");
        clearInputs();
        router.push("/startingpage");
      } catch (e) {
        dismissloading();
        setError(e.message);
        clearInputs();
        handleAlert(e.message);
      }
    }
  };

  // if(loading){
  //   return <IonLoading isOpen = {loading} onDidDismiss={() => setloading(false)} message={'Loging In!...'} duration={3000} mode= "ios" spinner="bubbles" translucent="false"/>
  // }

  return (
    <IonPage>
      <IonContent className="const3">
        <IonGrid className="login-grid">
          <IonRow>
            <IonLabel className="login-row" color="dark-black">
              Login
            </IonLabel>
          </IonRow>
          <IonRow className="login-text-row">
            <IonLabel color="dark-black">
              Welcome back! Please log in to continue!
            </IonLabel>
          </IonRow>
          <IonRow className="login-text-row1">
            <IonInput
              type="email"
              className="log3"
              placeholder="Email Address"
              value={email}
              color="dark-black"
              onIonChange={(e) => setEmail(e.detail.value)}
            />
            <IonInput
              type="password"
              className="log3"
              placeholder="Password"
              value={password}
              color="dark-black"
              onIonChange={(e) => setPassword(e.detail.value)}
            />
          </IonRow>
          <IonRow class="login-text-row3">
            <IonLabel color="dark-black">Forgot Password?</IonLabel>
          </IonRow>
          <IonRow className="login-page-btn">
            <IonButton
              expand="full"
              size="default"
              fill="solid"
              color="dark-black"
              className=" ion-text-capitalize log6"
              shape="round"
              onClick={handleSubmit}
            >
              {" "}
              Log In
            </IonButton>
            <IonRow className="social-login-text-row">
              <IonLabel className="signup9">Login using</IonLabel>
            </IonRow>
            <IonRow className="google-btn-row">
              <IonCol className="svg-col">
                {/* <IonButton className="google-btn" fill="clear" onClick={signInGoogle}> */}
                <IonImg className="google-img" src="assets/icon/google.svg"  />
                {/* </IonButton> */}
              </IonCol>

              <IonCol className="fb-img-col">
                <IonButton className="facebook-btn" fill="clear">
                  <IonImg className="face-img" src="assets/icon/facebook.svg" />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonRow>
          <IonRow className="login-text-row4">
            <IonLabel className="log7" color="dark-black">
              Dont have an account ? <Link to="/signup">Signup</Link>
            </IonLabel>
          </IonRow>
          {/* <IonLabel>hey</IonLabel>
          <IonLabel>live reload</IonLabel> */}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
};

export default Login;
