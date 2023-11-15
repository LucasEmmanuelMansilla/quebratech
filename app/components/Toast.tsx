import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Toast() {
  toast.custom(<div>Minimal Example</div>);

  // Tailwind Example
  toast.custom((t) => <div className={`bg-white px-6 py-4 shadow-md rounded-full ${t.visible ? "animate-enter" : "animate-leave"}`}>Hello TailwindCSS! 👋</div>);
  return (
    <div>
      <button>Make me a toast</button>
    </div>
  );
}
