import ControlledLoginForm from "./components/ControlledLoginForm/ControlledLoginForm";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import LoginForm from "./components/LoginForm/LoginForm";
import Profile from "./components/Profile/Profile";
import dataFromServer from "./data/profile.json";
import SearchBar from "./components/SearchBar/SearchBar";
import Section from "./components/Section/Section";
import { useState } from "react";
import { nanoid } from "nanoid";
import AddProfileForm from "./components/AddProfileForm/AddProfileForm";

function App() {
  const [users, setUsers] = useState(dataFromServer);
  const handleClick = (userName) => {
    console.log("name: ", userName);
  };
  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;

    setFilterValue(value);
  };

  const filteredProfiles = users.filter((profile) =>
    profile.name.toLocaleLowerCase().includes(filterValue.toLowerCase())
  );

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const onAddProfile = (profile) => {
    const finalProfile = {
      ...profile,
      id: nanoid(),
    };
    setUsers([finalProfile, ...users]);
  };

  const onDeleteProfile = (profileId) => {
    setUsers(users.filter((item) => item.id !== profileId));
    console.log(profileId);
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
      <Section title={"Profile List"}>
        <AddProfileForm onAddProfile={onAddProfile} />
      </Section>
      <div className="">
        <div className="">
          <h2>Search profile</h2>
          <input
            type="text"
            placeholder="Enter profile name"
            value={filterValue}
            onChange={handleFilter}
          />
        </div>
        {filteredProfiles.map((profile) => {
          return (
            <Profile
              key={profile.id}
              name={profile.name}
              phone={profile.phone}
              email={profile.email}
              status={profile.status}
              id={profile.id}
              onDeleteProfile={onDeleteProfile}
              hasPhisicalAddress={profile.hasPhisicalAddress}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
