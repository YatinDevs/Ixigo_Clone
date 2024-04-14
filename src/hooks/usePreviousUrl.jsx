import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePreviousUrl() {
  const location = useLocation();
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    setPrevUrl(location.pathname);
  }, [location.pathname]);

  return prevUrl;
}

export default usePreviousUrl;
