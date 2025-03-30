import React from 'react';
import * as Style from './pagination.styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const isLeftArrowDisabled = currentPage === 1;
  const isRightArrowDisabled = currentPage === totalPages;

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Style.Container>
      <Style.ButtonWrapper
        isDisabled={isLeftArrowDisabled}
        onClick={handlePrevPage}
        disabled={isLeftArrowDisabled}
      >
        <FiChevronLeft size={18} color="#1F2445" />
      </Style.ButtonWrapper>

      {pageNumbers.map((pageNumber) => (
        <Style.PageButton
          key={pageNumber}
          isActive={currentPage === pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </Style.PageButton>
      ))}

      <Style.ButtonWrapper
        isDisabled={isRightArrowDisabled}
        onClick={handleNextPage}
        disabled={isRightArrowDisabled}
      >
        <FiChevronRight size={18} color="#1F2445" />
      </Style.ButtonWrapper>
    </Style.Container>
  );
}

export default Pagination;