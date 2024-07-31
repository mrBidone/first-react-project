import { useState } from "react";

const ClicksButton = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick1 = () => {
    setClicks(clicks + 1);
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" onClick={handleClick1}>
        {" "}
        Current: {clicks}
      </button>
      <button type="button" onClick={handleToggle}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};

export default ClicksButton;
