import React from "react";

const Placeholder = () => {
  return (
    <div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse ">
          <div className="flex flex-col ">
            <div className="h-64 w-full bg-slate-700 rounded"></div>
            <div className="animate-pulse my-2">
              <div className="h-2 w-full  bg-slate-700 rounded "></div>
              <div className="h-2 w-3/4 my-1 bg-slate-700 rounded "></div>
              <div className="h-2 w-1/2 my-1 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
