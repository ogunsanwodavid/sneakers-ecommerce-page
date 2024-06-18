import { useEffect } from "react";

function AppMessage({ message, setMessage, setDisplayMessage }) {
  /**** This removes the error message after 5 seconds of display */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayMessage(false);
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [setDisplayMessage, setMessage]);

  return (
    <div className="fixed w-[250px] h-max p-3 bg-orange text-white font-bold top-[20px] rounded-lg left-[50%] translate-x-[-50%] z-20 flex items-center justify-center text-center md:w-[350px]">
      {message}
    </div>
  );
}

export default AppMessage;
