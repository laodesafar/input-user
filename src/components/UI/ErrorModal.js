import ReactDom from "react-dom";
import { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onConfirm}
      className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
    ></div>
  );
};

const Modal = (props) => {
  return (
    <div className="inset-x-0 bottom-0 relative z-10">
      <Card>
        <div className="mb-5 space-y-4 text-center  ">
          <h4 className=" text-red-500  text-2xl leading-tight truncate">
            {props.title}
          </h4>
          <p className=" text-gray-600">{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Modal
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
