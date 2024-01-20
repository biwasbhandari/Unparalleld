// Import necessary dependencies
"use client";
import { Toaster } from "react-hot-toast";

// Style the toast component with Tailwind CSS classes
const Toast = () => (
  <>
    <div>
      <Toaster toastOptions={{ duration: 3000 }} position={"top-right"} />
    </div>
  </>
);

export default Toast;
