import React, { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../contexts/ErrorContext";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Error = () => {
  const { error, setError } = useContext(ErrorContext);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setError("");
      }, 2000);
    }
  }, [error, setError]);
  return (
    <Snackbar open={error && showError} autoHideDuration={3000}>
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default Error;
