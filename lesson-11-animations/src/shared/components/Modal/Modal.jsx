import { createPortal } from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import clsx from "classnames";
import { CSSTransition } from "react-transition-group";

import css from "./Modal.module.css";
import fade from "./fade.module.css";
import CrossIcon from "../../icons/CrossIcon";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    open: false,
  };

  // constructor(props) {
  //   super(props);
  //   // this.el = document.createElement("div");
  // }

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
    this.props.onClose && this.props.onClose();
  };

  handleKeyDown = (event) => {
    if (event.code === "Escape" && this.props.open) {
      // console.log("[MODAL_CLOSED_BY_KEY]");
      this.props.onClose && this.props.onClose();
    }
  };

  render() {
    const { open, children, onClose } = this.props;
    return createPortal(
      <CSSTransition in={open} timeout={300} classNames={fade} unmountOnExit>
        <div className={css.container}>
          <div
            onClick={this.handleBackdrop}
            role="none presentation"
            tabIndex={-1}
            className={clsx(css.overlay)}
          />
          <div className={css.dialog__container}>
            <div role="dialog" className={clsx(css.modal)}>
              <button
                onClick={() => onClose()}
                type="button"
                className={css.close_button}
                aria-label="Close"
              >
                <CrossIcon />
              </button>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>,
      modalRoot
    );
  }
}

export default Modal;
