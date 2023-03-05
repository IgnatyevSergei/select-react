import React, { useState } from "react";
import "./App.css";
import ListItems from "./Components/list-items/list-items";
import SelectedItems from "./Components/selected-items";





function App() {
  const [hide, setHide] = useState(false);


  const openSelect = () => {
    setHide(!hide);
  };

    return (
    <div className="app-container">
      <div className="select">
        <ul className="selected-items-list">
            <SelectedItems />
        </ul>
        <div onClick={openSelect} className="window-for-enter">
          Выберите авто
        </div>
        {hide && (
          <ul className="list-items-block">
            <ListItems  />
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
