/**
 * contract of hook
 * input of hook( or params required ):none (only checks online status)
 * return of hook:boolean means online (1) or offline(0)
 *
 *
 */

import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    res();
  }, []);
  const res = () => (
    window.addEventListener("online", () => {
      console.log("You are now connected to the network.");
      setStatus(true);
    }),
    window.addEventListener("offline", () => {
      console.log("You are now connected to the network.");
      setStatus(false);
    })

    /* another method
    (ononline = () => {
      console.log("You are now connected to the network.");
      setStatus(true);
    }),
    (onoffline = () => {
      console.log("You are not connected to the network.");
      setStatus(false);
    })
    */
  );

  return status;
};
export default useOnlineStatus;
