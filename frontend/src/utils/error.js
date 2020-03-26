import { toast} from 'react-toastify';

export const errorNotify = (error) => {
  toast.error(error, {
    position: 'top-right',
    pauseOnHover: true,
    autoClose: true,
  });
}
