import React, { useState } from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import "./PageSelector.css";

const PageSelector = ({ pages, onDone }) => {
  const [selectedPages, setSelectedPages] = useState([]);
  const [allPagesChecked, setAllPagesChecked] = useState(false);

  const handleAllPagesChange = (e) => {
    const checked = e.target.checked;
    setAllPagesChecked(checked);
    if (checked) {
      setSelectedPages(pages.map((p) => p.id));
    } else {
      setSelectedPages([]);
    }
  };

  const handlePageChange = (pageId) => (e) => {
    const checked = e.target.checked;
    if (checked) {
      const newSelected = [...selectedPages, pageId];
      setSelectedPages(newSelected);
      if (newSelected.length === pages.length) {
        setAllPagesChecked(true);
      }
    } else {
      setSelectedPages(selectedPages.filter((id) => id !== pageId));
      setAllPagesChecked(false);
    }
  };

  const handleDone = () => {
    if (onDone) {
      onDone(selectedPages);
    }
  };

  return (
    <div className="page-selector">
      <div className="page-selector-all">
        <span className="page-selector-label">All pages</span>
        <Checkbox
          id="all-pages"
          checked={allPagesChecked}
          onChange={handleAllPagesChange}
        />
      </div>

      <div className="page-selector-divider"></div>

      <div className="page-selector-list">
        {pages.map((page) => (
          <div key={page.id} className="page-selector-item">
            <span className="page-selector-label">{page.name}</span>
            <Checkbox
              id={`page-${page.id}`}
              checked={selectedPages.includes(page.id)}
              onChange={handlePageChange(page.id)}
            />
          </div>
        ))}
      </div>

      <div className="page-selector-divider"></div>

      <div className="page-selector-footer">
        <Button onClick={handleDone}>Done</Button>
      </div>
    </div>
  );
};

export default PageSelector;
