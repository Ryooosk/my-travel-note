import Head from 'next/head'
import * as React from 'react'
import ListComponent from '../components/ListComponent';
import DetailComponent from '../components/DetailComponent';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const doAnalytics = () => getAnalytics(app);

export default function Home() {
  const [selectedArea, setSelectedArea] = React.useState("北海道");
  const handleSelectedArea = (area) => setSelectedArea(area); 

  React.useEffect(() => {
    doAnalytics();
  }, []);

  return (
    <div className="body">
      <Head>
        <title>My Travel Notes</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP&display=swap" rel="stylesheet"/>
      </Head>

      <header>
        <div className="title">
          <h1>僕の旅行記</h1>
        </div>
      </header>
      
      <main>
        <div className="list-container">
          <ListComponent handleSelectedArea = {handleSelectedArea} />
        </div>
        <div className='main-container'>
          <DetailComponent selectedArea = {selectedArea} />
        </div>
      </main>

      <footer>
        <div className='footer-text'>© 2022 - Ryooosk</div>  
      </footer>

      <style jsx>{`
        body {
          width: 100%;
        }

        main {
          height: 100%;
        }

        header {
          height: 150px;
          border-bottom: solid 2px #f5f5f5;
        }

        .title h1 {
          font-family: 'Dela Gothic One', cursive;
          font-size: 50px;
          text-align: center;
          line-height: 150px;
        }

        main {
          margin-right: auto;
          margin-left: auto;
          height: 100%;
          display: flex;
        }

        .main-container {         
          width: 50%;
          border-right: solid 2px #f5f5f5;
          border-left: solid 2px #f5f5f5;
          margin: 0 0 5% 5%;
        }

        .list-container {
          width: 10%;
          margin: 20px 0 5% 10%;
        }

        footer {
          height: 130px;
          background-color: #696969;
        }
        
        .footer-text {
          line-height: 130px;
          text-align: center;
        }

        @media (max-width: 1000px ) {
          body {
            width: 100%;
            margin: 0;
          }

          .list-container {
            width: 100%;
            padding: 10px 0;
            margin: 0;
            border-bottom: solid 2px #f5f5f5;
          }

          main {
            display: block;
          }

          .main-container {
            width: 80%;
            margin: 0 auto;
            padding-bottom: 20px;
          }
        }
      `}</style>
    </div>
  )
}
