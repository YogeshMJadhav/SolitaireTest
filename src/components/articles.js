import React from 'react';

const Articles = ({ nextPage, currentPage }) => {
  return (
    <div>
      <div>Page: {currentPage}</div>
      <button onClick={() => nextPage()}>Next Page</button>
    </div>
  );
};

export default Articles;
