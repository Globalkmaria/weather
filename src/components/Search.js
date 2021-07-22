import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
function Search({ setSearch }) {
  const [input, setInput] = useState('');
  const onSubmit = (e) => {
    if (input === '') return;
    if (e.key === 'Enter') {
      setSearch(input);
      setInput('');
    }
  };
  const onClick = () => {
    if (input === '') return;
    setSearch(input);
    setInput('');
  };
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search City..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onSubmit}
      />
      <button className="search-icon" onClick={onClick}>
        <BsSearch />
      </button>
    </div>
  );
}

export default React.memo(Search);
