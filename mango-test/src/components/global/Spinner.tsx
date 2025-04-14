const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
