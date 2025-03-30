import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Próximo
      </button>
    </div>
  );
}

export default Pagination;