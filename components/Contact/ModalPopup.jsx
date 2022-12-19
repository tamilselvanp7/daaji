/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPopup(props) {

	return(
		    <Modal
		      {...props}
		      aria-labelledby="contained-modal-title-vcenter"
		      centered
		    >
		      <Modal.Header closeButton />
		      <Modal.Body>
		         <div className="form-msg">
		            {props.succs ? (
		              <div className="submition_succ text-center" >
		                <h2 className="text-center text-success" style={{ fontSize: "18px",margin: "0 auto", textAlign:"center" }}>
		                  Thanks!! Your message is submitted successfully!!
		                </h2>
		              </div>
		            ) : null}
		          </div>
		      </Modal.Body>
		    </Modal>
	);
}

export default ModalPopup;