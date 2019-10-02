import React, { Fragment, FC, useState } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";

const App: FC = () => {
  const [clickState, setClickState] = useState<boolean>(false);

  function handleClick(): any {
    setClickState(true);
  }

  return (
    <Fragment>
      <header>
        <Title />
        <Subtitle text="Here is a subtitle" />
      </header>
      <p>The button is{!clickState && " not"} clickified!</p>
      <Button handleClick={handleClick} />
    </Fragment>
  );
};

export default App;