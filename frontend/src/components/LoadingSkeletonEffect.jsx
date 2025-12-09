import React from "react";

const LoadingSkeletonEffect = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="space-y-6 w-full max-w-2xl px-4">
        {/* Header skeleton */}
        <div className="h-12 bg-base-300 rounded-lg animate-pulse" />

        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="h-6 bg-base-300 rounded-lg animate-pulse w-3/4" />
          <div className="h-6 bg-base-300 rounded-lg animate-pulse w-full" />
          <div className="h-6 bg-base-300 rounded-lg animate-pulse w-5/6" />
        </div>

        {/* Card skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-32 bg-base-300 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeletonEffect;
