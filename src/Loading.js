import React from 'react';

function Loading() {
  return (
    <div className="loading">
      <div className="circle">
        <span className="circle-btn">
          <span className="circle__text">Loading ...</span>
        </span>
        <span className="circle__back-1"></span>
        <span className="circle__back-2"></span>
      </div>
    </div>
  );
}

export default Loading;
