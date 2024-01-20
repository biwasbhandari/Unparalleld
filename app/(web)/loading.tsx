const LoadinSpinner = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div
        className="inline-block h-2 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      ></div>
      <div
        className="inline-block h-2 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      ></div>
      <div
        className="inline-block h-2 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      ></div>
      <span>Loading</span>
      <div
        className="inline-block h-2 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      ></div>
      <div
        className="inline-block h-2 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      ></div>
      <div
        className="inline-block h-2 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};
export default LoadinSpinner;
