import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    // Зберігаємо ідентифікатор інтервалу в змінну
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
    // Очищаємо інтервал за його ідентифікатором
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>UseEffect with interval.</div>;
};

export default Modal;
