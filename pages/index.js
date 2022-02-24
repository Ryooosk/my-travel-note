import Head from 'next/head'
import * as React from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';
import { useEffect } from 'react/cjs/react.production.min';

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
const db = getFirestore(app);

//モーダル
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            aiueo
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// const photoListModal = (props) => {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const { area } = props;

//   const [photoList, setPhotoList] = useState([]);
  


//   useEffect(async () => {

//     const queryPhoto = async() => {
//       await getDocs(collection(db, "photos"));
//     };
//     const set = queryPhoto.doc.map((area) => {
//       return doc.data()
//     });

//     setPhotoList(set);
    
//     }, []);
    

//   return (
//     <>
//     <Button className="title" onClick={onOpen}>{area}</Button>
//     <Modal isOpen={isOpen} onClose={onClose}>
      
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>
          
//         </ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
          
          
//         </ModalBody>

//         <ModalFooter>
//           <Button colorScheme='blue' mr={3} onClick={onClose}>
//             Close
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>  
//     </>
//   );
// }



export default function Home() {
  const areaList = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];

  React.useEffect(() => {
    doAnalytics();
  }, []);

  return (
    <div className="body">

      <Head>
        <title>My Travel Notes</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      
      <main> 
        <header>
          <div className="title">
            <h1>僕の旅行記</h1>
          </div>
        </header>
        <div className="list">
          <ul>
            {areaList.map((area) => {
              return (
                <li>
                  {area}
                </li>
              )
            })}
          </ul>
        </div>
      </main>

      <footer>
        <div className="footer-list">
          <ul>
            <li>
            <a className="twitter" href="https://twitter.com/suke3san2001">Twitter</a>
            </li>
            <li>
              <a className="instagram" href="https://www.instagram.com/tbs_ksp_3/">Instagram</a>
            </li>
          </ul>
        </div>
        
        
      </footer>

      <style jsx>{`
        main {
          background-color: #faebd7;
          padding-top: 50px;
          padding-bottom: 5px; 
        }

        header {
          height: 60px;
        }

        .title h1 {
          font-family: Impact;
        }

        main ul {
          column-count: 5;
          color: #668ad8;
          border: dashed 2px #668ad8;
          background: #f1f8ff;
          padding: 0.5em 0.5em 0.5em 2em;
          margin: 50px;
          border-radius: 10px;
        }
        
        main ul li {
          line-height: 1.5;
          padding: 0.5em 0;
        }

        header h1{
          font-size: 40px;
          text-align: center;
        }

        footer {
          height: 150px;
          background-color: #696969;
          font-size: 15px;
          padding: 5px 0;
        }

        footer ul li {
          list-style: none;
          line-height: 1.5;
          padding-top: 10px;
          padding-left: 20px;
          font-family: Impact;
        }
        
        footer a {
          padding: 2px;
        }

      `}</style>
    </div>
  )
}
