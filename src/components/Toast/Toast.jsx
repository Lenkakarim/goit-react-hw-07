import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearError } from "../../redux/contactsSlice";

const Toast = ({ message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.error(message);
      dispatch(clearError());
    }
  }, [message, dispatch]);

  return null;
};

export default Toast;
