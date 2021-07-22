import React from 'react';
import Search from '../components/Search';

function SearchContainer({ setSearch }) {
  return (
    <>
      <Search setSearch={setSearch} />
    </>
  );
}

export default React.memo(SearchContainer);
