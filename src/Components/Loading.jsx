import React from 'react';

const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="text-center text-chocolate-400 font-medium mt-2">
        Processing...
      </div>
    )
  );
};

export default Loading;
