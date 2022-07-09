import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

interface ConfirmProps {
  okLabel: string;
  cancelLabel: string;
  title: string;
  onHide: (action: boolean) => void;
  children: JSX.Element;
  okColor: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
}

export function Confirm({
  okLabel,
  cancelLabel,
  title,
  onHide,
  children,
  okColor,
  ...other
}: ConfirmProps) {
  okLabel = okLabel || 'Ok';
  cancelLabel = cancelLabel || 'Cancel';
  title = title || '';
  okColor = okColor || 'primary';
  return (
    <Dialog
      open
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          onHide(false);
        }
      }}
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      {...other}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={() => onHide(true)} color={okColor}>
          {okLabel}
        </Button>
        <Button onClick={() => onHide(false)} color="primary">
          {cancelLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function dialog(modalElement: JSX.Element) {
  return new Promise((resolve) => {
    const mountNode = document.createElement('div');
    let open = true;
    render();

    function onExited() {
      if (!mountNode) return;
      ReactDOM.unmountComponentAtNode(mountNode);
      return null;
    }

    function render() {
      ReactDOM.render(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {React.cloneElement(modalElement, {
            open,
            onExited,
            onHide(action: boolean) {
              open = false;
              resolve(action);
              render();
            },
          })}
        </LocalizationProvider>,
        mountNode,
      );
    }
  });
}
