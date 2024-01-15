const LoadinSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-200">
        <h1>Loading</h1>
      </div>
    </div>
  );
};
export default LoadinSpinner;
