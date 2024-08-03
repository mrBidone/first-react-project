import ControlledLoginForm from "./components/ControlledLoginForm/ControlledLoginForm";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";
import Section from "./components/Section/Section";
import { useState } from "react";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");
  return (
    <>
      <Section>
        <h1>Please login to your account!</h1>
        <LoginForm onLogin={handleLogin} />
      </Section>
      <Section title={"Seach Bar"}>
        <SearchBar />
      </Section>
      <Section title={"Select"}>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </Section>
      <Section title={"Controlled login form"}>
        <ControlledLoginForm />
      </Section>
    </>
  );
}

export default App;
