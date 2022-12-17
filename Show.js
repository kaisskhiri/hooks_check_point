import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import "./ListeMovie.css";
import Modal from "react-bootstrap/Modal";

function Show(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
   
  };
  const add=()=>{
    props.setListe([
      ...props.liste,
      {
        title: tit.current.value,
        description: des.current.value,
        posterURL: pos.current.value,
        rating: rat.current.value,
      },
    ]);
    handleClose()
  }
  const handleShow = () => setShow(true);
  const tit = useRef();
  const des = useRef();
  const pos = useRef();
  const rat = useRef();

  return (
    <>
      <Button variant="primary" onClick={handleShow} className ="btn-ajout">
        TAP TO ADD
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color : "red" , font : "bold"  }}>Ajout de Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="container-add" type={"text"} ref={tit}></input>
          <input className="container-add" type={"text"} ref={des}></input>
          <input className="container-add" type={"text"} ref={pos}></input>
          <input className="container-add" type={"text"} ref={rat}></input>
        </Modal.Body>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={add}>
          Save Changes
        </Button>
      </Modal>      
    </>
  );
}
export default Show;
