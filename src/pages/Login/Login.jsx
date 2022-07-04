import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonImg,IonLabel,IonInput,IonIcon,IonButton, useIonRouter} from '@ionic/react';
import { lockClosed, mail, } from 'ionicons/icons';
import { useState } from 'react';
import './Login.css';
import { UserAuth } from "../../context/AuthContext";
import { toastController } from "@ionic/core";

const Login = () => {

  const { login, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  async function handleButtonClick(message) {
    const toast = await toastController.create({
      color: "light",
      duration: 2000,
      position: "top",
      message: message,
      showCloseButton: true,
    });

    await toast.present();
  }

  const router = useIonRouter();
  const handleSubmit = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (email == null || email === "" || password == null || password === "") {
      handleButtonClick("Fill the required fields");
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
        await login(email, password);
        handleButtonClick("user logged in successful");
        router.push("/startingpage");
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    }
  };

  return (
    <IonPage>
      <IonContent>
      <IonImg src="assets/icon/Arrow.svg" alt="" className='img2'/>
      <IonLabel className='log1'>Login</IonLabel>
      <IonLabel className='log2'>Welcome back! Please log in to continue!</IonLabel>
      <IonInput type="email" className='log3'   onIonChange={(e) => setEmail(e.detail.value)}> Email Adress</IonInput>
      <IonInput type="password" className='log4'   onIonChange={(e) => setPassword(e.detail.value)}> Password</IonInput>
      <IonLabel className='log5'>Forgot Password?</IonLabel>
      <IonButton expand="full" size="default" fill="solid"color="green"className="log6" onClick={handleSubmit}> Log In</IonButton>
      <IonLabel className='sign12'>Dont have an account ? <u className='plan7'>Signup</u></IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Login;
