import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'

const ImageModalComponent = (props) => {
  const { photo } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <img className="main-img" size={"full"} onClick={onOpen} src={photo.url}/>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton/>
            <ModalBody calssName="modal">
              <img className='modal-img' src={photo.url}/>
            </ModalBody>
          </ModalContent>
        </Modal>
        <style jsx>{`
        .main-img {
          width: 300px;
        }

        .main-img:hover {
          opacity: 0.6;
        }

        .modal-img {
          margin-top: 40px;
          margin-bottom: 15px;
          width: 100%;
        }   

        img {
          border-radius: 5px;
        }

        .modal {
          background: red;
        }

        @media (max-width: 740px ) {
          .main-img {
            margin: 20px auto 0 auto;
            width: 80%;
          }
        }
        `}</style>
    </>
  )
}

export default ImageModalComponent