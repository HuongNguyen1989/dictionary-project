import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function change(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary mt-5">
      <form onSubmit={change}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
