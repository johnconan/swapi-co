import React from 'react';

import icon from './error404.jpg';

import './error-indicator.css'

const ErrorLoad = () => {
    return (
      <div className="error">
        <img src={icon} alt="error"/>
      </div>
    );
}

export default ErrorLoad;