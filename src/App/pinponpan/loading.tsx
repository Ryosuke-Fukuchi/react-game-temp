import React from "react";

type PropsType = {
  className?: string;
  isLoading: boolean;
};

export const SimpleLoading: React.FC<PropsType> = ({
  className = "",
  isLoading,
}) => {
  return isLoading ? (
    <div className="flex justify-center items-center absolute z-50 inset-0 bg-slate-400/50">
      <div
        className={`animate-spin rounded-full border-t-blue-400 border-4 border-slate-100 ${className}`}
      ></div>
    </div>
  ) : (
    <></>
  );
};
