/* This component will contain a button that clears all of the list items which the person has previously entered.*/

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
