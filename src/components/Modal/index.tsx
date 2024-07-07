import React from "react";

import { createPortal } from "react-dom";
import clsx from "clsx";

import Overlay from "../Overlay";

import { StyledDiv } from "./style";
import useOutsideClick from "@/hooks/useOutsideClick";

interface IModal {
  title?: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
  loader?: boolean;
  overlayClick?: boolean;
  search?: React.ReactNode;
}

const Modal = ({
  title,
  className,
  isOpen,
  onClose,
  children,
  maxWidth = "820px",
  loader = false,
  search,
  overlayClick = true,
}: IModal) => {
  const style = {
    maxWidth: maxWidth,
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const ref = React.useRef(null);

  useOutsideClick(ref, () => {
    if (overlayClick) {
      onClose();
    }
  });

  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <Overlay zIndex={9} position="fixed" />
            <StyledDiv
              className={clsx("modal fade", className, { open: "show" })}
            >
              <div className="modal-dialog" style={style} ref={ref}>
                <div className="modal-content">
                  <div className="modal-header">
                    <a className="close-btn" onClick={onClose}>
                      X
                    </a>

                    {title && (
                      <div className="modal-title">
                        <h3 className="h3 title">{title}</h3>
                      </div>
                    )}
                  </div>

                  {search ? <div className="modal-search">{search}</div> : null}
                  <div className="modal-body">
                    {loader ? (
                      <div className="loader-container">
                        <p>Loading....</p>
                      </div>
                    ) : (
                      children
                    )}
                  </div>
                </div>
              </div>
            </StyledDiv>
          </>,
          document.body as HTMLElement
        )}
    </>
  );
};

export default Modal;
