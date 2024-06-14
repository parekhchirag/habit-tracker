import React, { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';
import Alert from '@mui/material/Alert';

const Error = () => {
    const { error, setError } = useContext(ErrorContext);
    const [showError, setShowError] = useState(false);
    useEffect(()=>{
        if(error){
            setShowError(true);
            setTimeout(()=>{
                setShowError(false);
                setError('');
            }, 2000)
        }
    }, [error, setError]);
    return (
        error && showError && <Alert severity="error">{error}</Alert>
    )
}

export default Error;