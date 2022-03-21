import * as React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ImageModalComponent from './ImageModalComponent';

const firebaseConfig = {
  apiKey: "AIzaSyCAgG8T8_Bd0Z2ryyhPAsfxqVML25-vswc",
  authDomain: "project-photo-f1ae2.firebaseapp.com",
  projectId: "project-photo-f1ae2",
  storageBucket: "project-photo-f1ae2.appspot.com",
  messagingSenderId: "903517776237",
  appId: "1:903517776237:web:9e460787a0c8816e72d264",
  measurementId: "G-WQKLWNZ32S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DetailComponent = (props) => {
  const { selectedArea } = props;

  const [photoList, setPhotoList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const photosRef = collection(db, "photos");
      const q = query(photosRef, where("name", "==", selectedArea));
      const querySnapshot = await getDocs(q);
      const photos = querySnapshot.docs.map((doc) => {
        const photo = {
          data: doc.data(),
          id: doc.id
        };
        return photo;
      });
      //setState
      setPhotoList(photos);
    })();
  }, [selectedArea]);
  
  return (
    <div className='main'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP&display=swap" rel="stylesheet"/>
      </head>

      <div className='area-name'>{selectedArea}</div>

      <div className='contents'>
        {photoList.map((photo) => {        
          return (
            <div className="content" key={photo.id}>      
                <ImageModalComponent photo={photo.data}/>
                <div className='text'>
                  <div className='desc'>
                    <p>{photo.data.desc}</p>
                  </div>
                  <div className='place'>場所：{photo.data.place}</div> 
                </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .main {
          font-family: 'Noto Sans JP', sans-serif;
          padding-top: 20px;
        }

        .area-name {
          margin-left: 10%;
          font-size:20px;
        }

        .content {
          border-bottom: solid 2px #f5f5f5;
          padding: 20px 0 20px 10%;
          display: flex;
        }

        .text {
          background: #f5f5f5;
          margin: 0 10% 0 5%;
          border-radius: 10px;
          width: 300px;
          height: 200px;
          position: relative;
          padding: 10px;
        }

        .place {
          text-decoration: underline;
          display: block;
          margin: 10px;
          position: absolute;
          right: 0;
          bottom: 0;
        }

        @media (max-width: 740px ) {
          .contents {
            width: 80%;
            margin: 0 auto;
          }

          .content {
            display:block;
            margin: 0 auto;
            padding: 0;
          }

          .text {
            margin: 20px auto 20px auto;
            width: 100%;
            height: 130px;
          }
        }
      `}</style>
    </div>
  )
}

export default DetailComponent