import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
       <li class="page-item">
           <a class="page-link" href="#" aria-label="Previous"  onClick={() => paginate(1)}>
            <span aria-hidden="true">&laquo;</span>
           <span class="sr-only">Previous</span>
          </a>
         </li>
        {pageNumbers.map(number => (
         
          <li key={number} className='page-item'>
            <a  onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        
        ))}
           <li class="page-item">
            <a class="page-link" href="#" aria-label="Next" onClick={() => paginate(pageNumbers)}>
               <span aria-hidden="true">&raquo;</span>
               <span class="sr-only">Next</span>
            </a>
          </li>
      </ul>
    </nav>

  );
};

export default Pagination;


