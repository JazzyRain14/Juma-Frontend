import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useToast = () => {
  const [showToastMessage, setShowToastMessage] = useState("");

  useEffect(() => {
    if (showToastMessage) {
      toast.success(
        { showToastMessage },
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        }
      );
      setShowToastMessage("");
    }
  }, [showToastMessage]);

  const showToast = useCallback((message) => {
    setShowToastMessage(message);
  }, []);

  return { showToast };
};
