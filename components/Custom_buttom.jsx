import React from "react";
import './styles/Custom_Button.css';

function Custom_Buttom({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        class="
        btn btn--pink btn--border-ridge
         "
      >
        PUSH!
      </button>
    </div>
  );
}

export default Custom_Buttom;


