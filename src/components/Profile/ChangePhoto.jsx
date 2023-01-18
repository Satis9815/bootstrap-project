import {
  Avatar,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ChangePhoto = ({ isOpen, onClose, chnageImageSubmitHandler }) => {
  const [image, setImage] = useState();
  const [imagePrev, setImagePrev] = useState();
  const ChangeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const handleClose = () => {
    onClose();
    setImagePrev();
    setImage();
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => chnageImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <label>
                  <span className="" aria-hidden="true">
                    choose file
                  </span>
                  <input
                    type="file"
                    id="upload"
                    style={{ display: 'none' }}
                    onChange={ChangeImage}
                  />
                </label>
                <Button variant="secondary" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChangePhoto;
