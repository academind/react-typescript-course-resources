import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// This type is used with `forwardRef` to ensure that the `Modal` component can be used with `useImperativeHandle` to expose a `open` method
export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void; // The onClose function prop is used to propagate the default "close" event that can be triggered by <dialog> (for example, when the ESC key is pressed)
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal (
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  // useImperativeHandle is used to expose the `open` method to other components
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) {
          dialog.current.showModal(); // showModal() is a built-in method available on the <dialog> element
        }
      },
    };
  });

  // Below, the onClose prop is set on <dialog> to handle the case that the user closes the modal via a built-in mechanism (ESC key)
  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal-root')!
  );
});

export default Modal;
