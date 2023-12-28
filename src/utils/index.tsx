import { ToastPosition, toast } from 'react-toastify';

export const showToastMessage = (message: string, position: ToastPosition, closeOnClick: boolean) => {
  toast.success(message, {
    position: position,
    closeOnClick,
  });
};
