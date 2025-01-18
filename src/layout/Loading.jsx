import React from "react";
 
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-weep1"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-weep2"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full animate-weep3"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-weep4"></div>
      </div>
    </div>
  );
};

export default Loading;
