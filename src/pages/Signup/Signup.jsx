import { IonContent, IonHeader, IonImg, IonLabel, IonPage, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, useIonRouter } from '@ionic/react';
import { useState } from 'react';
// import { calendar, lockClosed, person } from 'ionicons/icons';
import './SignUp.css';
// import { setErrorHandler } from 'ionicons/dist/types/stencil-public-runtime';
import { UserAuth } from "../../context/AuthContext";
import { toastController } from "@ionic/core";




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
      <IonContent >
        <IonImg src="assets/icon/Arrow.svg" alt="" className='img1' />
        <IonLabel className='sign1'>Create Account</IonLabel>
        <IonLabel className='sign2'>Signup to keep Exploring amazing destinations around the world!</IonLabel>
        <IonInput type="text" className='sign3' onIonChange={(e) => setName(e.target.value)} > Full Name</IonInput>
        <IonInput type="email" className='sign4' onIonChange={(e) => setEmail(e.target.value)}>Email</IonInput>
        {/* <IonInput type="date" className='sign5' onIonChange={(e) => setDOB(e.target.value)} >Date</IonInput> */}
        <IonInput type="password" className='sign6' onIonChange={(e) => setPassword(e.target.value)}> Password</IonInput>
        <IonButton expand="full" size="default" fill="solid" color="green" className="sign7" onClick={handleSubmit}> sign up</IonButton>
        <IonLabel className='sign8'>or</IonLabel>
        <IonLabel className='sign12'>Already have an account ? <u className='plan7'>Login</u></IonLabel>
        <p className="sign9">By creating an account you agree to our</p>
        <br />
        <p className="sign10">
          <u className="sign11">Terms & Conditions </u> and agree to
          <u className="sign11"> Privacy Policy </u>
        </p>


      </IonContent>
    </IonPage>
  );
};

export default Signup;
