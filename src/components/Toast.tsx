import { useState } from "react";

export default function Toast() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Toast</button>
      {isOpen && <div>Toast</div>}
    </div>
  );
}
