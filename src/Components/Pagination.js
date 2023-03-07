import React from "react";

function Pagination({ currentPage, totalPages }) {
  return (
    <div>
      <button disabled={currentPage === 1}>Previa</button>
      <button disabled={currentPage === totalPages}>Siguiente</button>
    </div>
  );
}

export default Pagination;
