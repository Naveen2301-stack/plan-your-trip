import { IonContent, IonHeader, IonImg, IonLabel, IonPage, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, useIonRouter, IonGrid, IonRow } from '@ionic/react';
import { useState } from 'react';
// import { calendar, lockClosed, person } from 'ionicons/icons';
import './SignUp.css';
// import { setErrorHandler } from 'ionicons/dist/types/stencil-public-runtime';
import { UserAuth } from "../../context/AuthContext";
import { toastController } from "@ionic/core";
import { Link } from 'react-router-dom';




const Signup = () => {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [dob, setDOB] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const { createUser, currentUser } = UserAuth();
  const router = useIonRouter();

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
      handleButtonClick("fill the required fields");
    } else if (password.length < 6) {
      handleButtonClick("Password must be of atleast 6 characters");
    }else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    )
    {
      handleButtonClick("Please enter valid email address");
    }else {
    // e.preventDefault()
    // setError('')
     try {
      await createUser(email, password);
      handleButtonClick(name +"  " + "user sucessfully registered")
      router.push("/login")
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  };
  return (
    <IonPage>
      <IonContent className='const1' >
        <IonGrid className='signup-grid'>
          <IonRow className='signup-row '>
        <IonLabel>Create Your Account</IonLabel>
        </IonRow>
        <IonRow className='signup-text-row'>
        <IonLabel >Signup to keep Exploring amazing </IonLabel>
          <IonLabel>destinations around the world!</IonLabel>
        </IonRow>
        <IonRow className='signup-text-row1'>
        <IonInput type="text" className='sign3' placeholder='Name' onIonChange={(e) => setName(e.target.value)} /> 
        </IonRow>
        <IonRow className='signup-text-row2'>
        <IonInput type="email" className='sign4'placeholder='Email Adress' onIonChange={(e) => setEmail(e.target.value)} />
        </IonRow>
        <IonRow className='signup-text-row3'>
        <IonInput type="password" className='sign6' placeholder='set password' onIonChange={(e) => setPassword(e.target.value)} />
        </IonRow>
        <IonRow className='signup-page-btn'>
        <IonButton expand="full" size="default" fill="solid" color="green" className="sign7" onClick={handleSubmit}> sign up</IonButton>
        </IonRow>
        <IonRow className='sign8'>
        <IonLabel>or</IonLabel>
        </IonRow>
        <IonRow className='signup-text-row4'>
        <IonLabel className='sign12'>Already have an account ? <Link to ="/login"> Login</Link> </IonLabel>
        </IonRow>
        <IonRow className='signup-text-row5'>
        <IonLabel >By creating an account you agree to our </IonLabel>
          <IonLabel> <Link to="/">Terms & Conditions </Link> and agree to <Link to="/"> Privacy Policy </Link> </IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
