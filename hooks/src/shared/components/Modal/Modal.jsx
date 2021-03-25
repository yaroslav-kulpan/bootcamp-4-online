import { createPortal } from "react-dom";
import React, { Component } from "react";
import clsx from "classnames";
import css from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  componentDidMount() {
    // modalRoot.appendChild(this.el);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // modalRoot.removeChild(this.el);
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleBackdrop = () => {
    // console.log("[EVENT_TARGET]", event.target);
    // console.log("[EVENT_CURRENT_TARGET]", event.currentTarget);
    // if (event.target !== event.currentTarget) {
    //   this.props.onClose && this.props.onClose();
    // }
    this.props.onClose && this.props.onClose();
  };

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      // console.log("[MODAL_CLOSED_BY_KEY]");
      this.props.onClose && this.props.onClose();
    }
  };

  render() {
    const { open, children, onClose } = this.props;
    return createPortal(
      open ? (
        <div className={css.container}>
          <div
            onClick={this.handleBackdrop}
            role="none presentation"
            tabIndex={-1}
            className={clsx(css.overlay, {
              [css.overlay__open]: open,
            })}
          />
          <div className={css.dialog__container}>
            <div
              role="dialog"
              className={clsx(css.modal, { [css.modal__open]: open })}
            >
              <button
                onClick={() => onClose()}
                type="button"
                className="btn-close"
                aria-label="Close"
              />
              {children}
            </div>
          </div>
        </div>
      ) : null,
      modalRoot
    );
  }
}

export default Modal;
