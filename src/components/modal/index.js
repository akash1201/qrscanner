import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function QRModal({show, setShow, data}) {
  return (
    <div
      className={`modal ${show && 'show'}`}
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>QR Scanned</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{data}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShow(false)}}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default QRModal;