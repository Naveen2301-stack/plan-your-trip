import { IonCard, IonCol, IonContent,  IonIcon,  IonPage, IonRow, IonText } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { heartOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Details = () => {

  const [places,setUpdatedPlaces] = useState([])
  useEffect(()=>{
    getDocs(collection(db, "places_destination")).then((snapshot) =>{
      const places = [];
      snapshot.docs.forEach((docs) =>{
        places.push({...docs.data(), id: docs.id});
      })
      setUpdatedPlaces(places);

    });
  }, [])
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonRow className="big-cards">
            {places.map((data) => {
              return (
                <IonCol
                  key={data.id}>
                  <IonCard key={data.id} button className="card12">
                    {/* <IonImg src={data.image} className="img"></IonImg> */}
                    <LazyLoadImage src={data.image} effect="blur" delayTime={300} placeholderSrc={process.env.PUBLIC_URL + "/assets/logo.jpg"} width="350px" height="231px" style={{margin: "auto"}} />
                    <IonText className="paris-text">{data.title}</IonText>
                    <IonIcon icon={heartOutline} className="heart-icon"></IonIcon>
                  </IonCard>
                </IonCol>
              );
            })}
          </IonRow>
  
      </IonContent>
    </IonPage>
  );
};

export default Details;
