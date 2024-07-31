const Button = () => {
  const handleClick = () => {
    alert("I'm a button!");
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Click me!
      </button>
    </>
  );
};

export default Button;

// Запис за допомогою Анонімної інлайн-функції
//const App = () => {
//	return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
// };
