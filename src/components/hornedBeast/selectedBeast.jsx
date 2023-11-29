//gpt assisted 

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SelectedBeast = ({ beast, onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={beast.image} alt={beast.title} style={{ width: '100%' }} />
        <p>{beast.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectedBeast;