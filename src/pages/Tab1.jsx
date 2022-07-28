import {
  IonContent,
  IonPage,
  IonImg,
  IonLabel,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonIcon,
  useIonViewWillEnter,
  IonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  useIonRouter,
} from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import "./Tab1.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { Router } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
// import country from '../../public/assets/images/Group 92.png'

const Tab1 = () => {
  const [data, setData] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [places,setUpdatedPlaces] = useState([])
  const router = useIonRouter();

  const pushData = () => {
    // const max = datas.length + 8;
    // const min = max - 12;
    const newData = [];
    for (let i = 0; i < 12; i++) {
      newData.push(places[i]);
    }
    setData([...data, ...newData]);
  };
 

  const loadData = (ev) => {
    console.log(data.length);
    setTimeout(() => {
      pushData();
      console.log('Loaded data');
      ev.target.complete();
      console.log(data.length);
      if(data.length === 12){
        setInfiniteDisabled(data.length < 12);
      }
    }, 5000);
  }
  useIonViewWillEnter(() => {
    pushData();
  });

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
      <IonContent className="tab1">
        <IonGrid className="tab1-grid">
          <IonRow className="home-back-button-row">
            <IonImg src="assets/icon/Arrow.svg" alt="" className="arrow" />
            <IonLabel className="v1">Hi Vecna!</IonLabel>
          </IonRow>

          <IonRow className="hi-text">
            <IonLabel>Discover</IonLabel>
          </IonRow>

          <IonRow>
            <IonSearchbar
              placeholder="search for places"
              className="sb"
              showCancelButton="never"
            ></IonSearchbar>
          </IonRow>
          <IonRow className="card-row">
            <IonCard className="card1">
              <IonImg
                className="img-img"
                src="assets/images/Group 92.png"
              ></IonImg>
              <IonLabel className="countries">Countries</IonLabel>
            </IonCard>

            <IonCard className="card2">
              <IonImg
                className="img-img"
                src="assets/images/bxs_camera.png"
              ></IonImg>
              <IonLabel className="countries">Sights</IonLabel>
            </IonCard>
            <IonCard className="card3">
              <IonRow className="row2">
                <IonImg
                  className="img-img  "
                  src="assets/images/train.png"
                ></IonImg>

                <IonLabel className="countries">Tours</IonLabel>
              </IonRow>
            </IonCard>
          </IonRow>
          <IonRow className="pd">
            <IonLabel className="pd1">Popular Destinations</IonLabel>
            <IonLabel className="pd2">See all</IonLabel>
          </IonRow>

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
          
          <IonInfiniteScroll onIonInfinite={loadData} threshold="100px" disabled={isInfiniteDisabled}>
            <IonInfiniteScrollContent loadingSpinner="crescent" loadingText="Loading more Places..." >

            </IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
