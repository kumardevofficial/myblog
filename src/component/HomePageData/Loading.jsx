const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Spinner Animation */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 border-solid"></div>
      {/* Loading Text */}
      <span className="ml-4 text-lg font-semibold text-blue-500">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
