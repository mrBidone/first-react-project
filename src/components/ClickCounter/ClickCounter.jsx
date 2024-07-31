import { useEffect, useState } from "react";

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });
  return (
    <button type="button" onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};

export default ClickCounter;
