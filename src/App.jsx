import Bar from "./components/Bar/Bar";
import Button from "./components/Button/Button";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import ClicksButton from "./components/ClicksButton/ClicksButton";
import CustomButton from "./components/CustomButton/CustomButton";
import { useState } from "react";
import Section from "./components/Section/Section";
import Modal from "./components/Modal/Modal";

function App() {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0,
  });

  const onBarSupplyAdd = (alcoName) => {
    setBottles({ ...bottles, [alcoName]: bottles[alcoName] + 1 });

    // if (alcoName === "beer") {
    //   setBottles({ ...bottles, beer: bottles["beer"] + 1 });
    // }
    // if (alcoName === "wine") {
    //   setBottles({ ...bottles, wine: bottles["wine"] + 1 });
    // }
    // if (alcoName === "whiskey") {
    //   setBottles({ ...bottles, whiskey: bottles["whiskey"] + 1 });
    // }
  };

  const total = bottles.beer + bottles.wine + bottles.whiskey;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => {
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Section title="Section Bar">
        <Bar
          beer={bottles.beer}
          wine={bottles.wine}
          whiskey={bottles.whiskey}
          total={total}
          onBarSupplyAdd={onBarSupplyAdd}
        />
      </Section>
      <Button />
      <CustomButton message="Playing music!">Play</CustomButton>
      <CustomButton message="Uploading your data">Upload</CustomButton>
      <ClicksButton />
      <ClickCounter />

      <Section title={"Modal section"}>
        <button onClick={() => setIsModalOpen(!isModalOpen)}>
          {isModalOpen ? "Stop" : "Start"}
        </button>
        {isModalOpen && <Modal onCloseModal={onCloseModal} />}
      </Section>
    </>
  );
}

export default App;
