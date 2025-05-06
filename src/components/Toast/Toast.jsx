import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  return null;
};

export default Toast;
