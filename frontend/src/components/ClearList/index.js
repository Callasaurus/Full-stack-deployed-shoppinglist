
import React from 'react';
import './clearList.css';

function ClearList({ clearList, buttonText }) {
  return (
    <section>
      <button className="ClearList" onClick={() => clearList()}>
        {buttonText}
      </button>
    </section>
  );
}

export default ClearList;
