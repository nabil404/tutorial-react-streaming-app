import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => {
        history.goBack();
      }}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => {
          e.stopPropagation(); //Stops the propagation of the event
        }}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
