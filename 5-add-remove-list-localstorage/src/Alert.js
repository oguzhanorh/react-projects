import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  //removeAlert kullanma amacımız alertin ekranda kalmaması belirli bir süre sonra ortadan kaybolması için.
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
