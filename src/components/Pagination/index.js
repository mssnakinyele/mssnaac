/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { scroller } from "react-scroll";

import committeeDetails from "../../data/committee-details";

import Items from "./Items";
import SlideIn from "../../animations/SlideIn";

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
    scroller.scrollTo("paginate-heading", {
      smooth: true,
      duration: 1500,
    });
  };

  return (
    <>
      <SlideIn from='bottom'>
        <Items currentItems={currentItems} />
      </SlideIn>
      <ReactPaginate
        nextLabel='Next'
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLabel='Prev'
        pageClassName='number-item'
        pageLinkClassName='number-link'
        previousClassName='prev-item'
        previousLinkClassName='prev-link'
        nextClassName='next-item'
        nextLinkClassName='next-link'
        activeLinkClassName='active-link'
        activeClassName='active'
        containerClassName='pagination'
        disabledLinkClassName='disabled'
      />
    </>
  );
};

export default Pagination;
