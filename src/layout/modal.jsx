import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Ourcontext from '../usecontext/Usecontext';

const Backdrop = (prop) => {
  const{makehide}=useContext(Ourcontext)
  return (
    <div onClick={makehide} className="fixed inset-0 bg-black bg-opacity-50 z-40">
      {prop.children}
    </div>
  );
};

const ModalOverlay = (prop) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 max-w-lg w-full">
      {prop.children}
    </div>
  );
};

const portalElem = document.getElementById('overlayes');

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, portalElem)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElem)}
    </div>
  );
};

export default Modal;
