import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonImg,IonLabel,IonInput,IonIcon,IonButton, useIonRouter, IonGrid, IonRow} from '@ionic/react';
import { lockClosed, mail, } from 'ionicons/icons';
import { useState } from 'react';
import './Login.css';
import { UserAuth } from "../../context/AuthContext";
import { toastController } from "@ionic/core";
import { Link } from 'react-router-dom';

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
      <IonContent className='const3'>
        <IonGrid className='login-grid'>
          <IonRow>
      <IonLabel className='login-row'>Login</IonLabel>
      </IonRow>
      <IonRow className='login-text-row'>
      <IonLabel >Welcome back! Please log in to continue!</IonLabel>
      </IonRow>
      <IonRow className='login-text-row1'>
      <IonInput type="email" className='log3' placeholder='EmailAddress'  onIonChange={(e) => setEmail(e.detail.value)} /> 
      </IonRow>
      <IonRow className='login-text-row2'>
      <IonInput type="password" className='log4' placeholder='password'  onIonChange={(e) => setPassword(e.detail.value)} />
      </IonRow>
      <IonRow class='login-text-row3'>
      <IonLabel>Forgot Password?</IonLabel>
      </IonRow>
      <IonRow className='login-page-btn'>
      <IonButton expand="full" size="default" fill="solid"color="green"className="log6" onClick={handleSubmit}> Log In</IonButton>
      </IonRow>
      <IonRow className='login-text-row4'>
      <IonLabel className='log7' >Dont have an account ? <Link to = "/signup">Signup</Link></IonLabel>
      </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
