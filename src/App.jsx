import React, { useState } from "react";
import Button from "./components/Button/Button";
import CheckboxList from "./components/CheckboxList/CheckboxList";
import PageSelector from "./components/PageSelector/PageSelector";
import "./App.css";

function App() {
  const [checkboxItems, setCheckboxItems] = useState([
    { id: 1, label: "All pages", checked: false },
    { id: 2, label: "All pages", checked: false },
    { id: 3, label: "All pages", checked: true },
    { id: 4, label: "All pages", checked: true },
    { id: 5, label: "All pages", checked: true },
    { id: 6, label: "All pages", checked: true },
    { id: 7, label: "All pages", checked: true },
    { id: 8, label: "All pages", checked: false },
  ]);

  const pages = [
    { id: 1, name: "Page 1" },
    { id: 2, name: "Page 2" },
    { id: 3, name: "Page 3" },
    { id: 4, name: "Page 4" },
  ];

  const handleCheckboxChange = (id) => {
    setCheckboxItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handlePageSelectorDone = (selectedPageIds) => {
    console.log("Selected pages:", selectedPageIds);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="app">
      <div className="app-container">
        <section className="component-section">
          <h2 className="section-title">Button Component</h2>
          <div className="button-group">
            <Button onClick={handleButtonClick}>Done</Button>
            <Button onClick={handleButtonClick}>Done</Button>
            <Button onClick={handleButtonClick}>Done</Button>
          </div>
        </section>

        <section className="component-section">
          <h2 className="section-title">Checkbox List Component</h2>
          <CheckboxList
            items={checkboxItems}
            onItemChange={handleCheckboxChange}
          />
        </section>

        <section className="component-section">
          <h2 className="section-title">Page Selector Component</h2>
          <div className="centered-component">
            <PageSelector pages={pages} onDone={handlePageSelectorDone} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
