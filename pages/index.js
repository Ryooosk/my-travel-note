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

const BasicUsage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
  )
}



export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="container">

      <Head>
        <title>My Travel Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <header>
          <div class="title">
            <h1>僕の旅行記</h1>
          </div>
        </header>
        <div className="list">
          <ul>
            <li>
              <Button onClick={onOpen}>北海道</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>北海道</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      
                      きれい
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
            </li>
            <li>青森県</li>
            <li>岩手県</li>
            <li>宮城県</li>
            <li>秋田県</li>
            <li>山形県</li>
            <li>福島県</li>
            <li>茨城県</li>
            <li>栃木県</li>
            <li>群馬県</li>
            <li>埼玉県</li>
            <li>千葉県</li>
            <li>東京都</li>
            <li>神奈川県</li>
            <li>新潟県</li>
            <li>富山県</li>
            <li>石川県</li>
            <li>福井県</li>
            <li>山梨県</li>
            <li>長野県</li>
            <li>岐阜県</li>
            <li>静岡県</li>
            <li>愛知県</li>
            <li>三重県</li>
            <li>滋賀県</li>
            <li>京都府</li>
            <li>大阪府</li>
            <li>兵庫県</li>
            <li>奈良県</li>
            <li>和歌山県</li>
            <li>鳥取県</li>
            <li>島根県</li>
            <li>岡山県</li>
            <li>広島県</li>
            <li>山口県</li>
            <li>徳島県</li>
            <li>香川県</li>
            <li>愛媛県</li>
            <li>高知県</li>
            <li>福岡県</li>
            <li>佐賀県</li>
            <li>長崎県</li>
            <li>熊本県</li>
            <li>大分県</li>
            <li>宮崎県</li>
            <li>鹿児島県</li>
            <li>沖縄県</li>
          </ul>
        </div>
      </main>

      <footer>
        <div className="footer-list">
          <ul>
            <li>
              <a href="https://twitter.com/suke3san2001">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/tbs_ksp_3/">Instagram</a>
            </li>
          </ul>
        </div>
        
        
      </footer>

      <style jsx>{`
        main {
          background-color: #faebd7;
          padding-top: 5px;
          padding-bottom: 5px; 
        }

        header {
          height: 60px;
        }

        main ul {
          column-count: 5;
          color: #668ad8;
          border: dashed 2px #668ad8;
          background: #f1f8ff;
          padding: 0.5em 0.5em 0.5em 2em;
          margin: 50px;
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
          height: 100px;
          background-color: #696969;
          font-size: 15px;
          padding: 5px 0;
        }

        footer ul li {
          list-style: none;
          line-height: 1.5;
          padding-top: 10px;
        }
      `}</style>
    </div>
  )
}
