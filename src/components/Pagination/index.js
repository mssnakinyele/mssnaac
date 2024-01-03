/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import committeeDetails from "../../data/committee-details";

import Items from "./Items";

const Pagination = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(committeeDetails.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(committeeDetails.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % committeeDetails.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel='Next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='Prev'
        pageClassName='number-item'
        pageLinkClassName='number-link'
        previousClassName='prev-item'
        previousLinkClassName='prev-link'
        nextClassName='next-item'
        nextLinkClassName='next-link'
        containerClassName='pagination'
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
