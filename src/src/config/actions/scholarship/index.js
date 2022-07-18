const scholarship = {
  GET_SCHOLARSHIPS_REQUEST: 'GET_SCHOLARSHIPS_REQUEST',
  GET_SCHOLARSHIPS_SUCCESS: 'GET_SCHOLARSHIPS_SUCCESS',
  GET_SCHOLARSHIPS_ERROR: 'GET_SCHOLARSHIPS_ERROR',

  GET_MY_TRANSACTIONS_REQUEST: 'GET_MY_TRANSACTIONS_REQUEST',
  GET_MY_TRANSACTIONS_SUCCESS: 'GET_MY_TRANSACTIONS_SUCCESS',
  GET_MY_TRANSACTIONS_ERROR: 'GET_MY_TRANSACTIONS_ERROR',

  SEARCH_SCHOLARSHIP_REQUEST: 'SEARCH_SCHOLARSHIP_REQUEST',
  SEARCH_SCHOLARSHIP_SUCCESS: 'SEARCH_SCHOLARSHIP_SUCCESS',
  SEARCH_SCHOLARSHIP_ERROR: 'SEARCH_SCHOLARSHIP_ERROR',

  getScholarships: (data) => ({
    type: scholarship.GET_SCHOLARSHIPS_REQUEST,
    data,
  }),
//update
  getMyTransactions: (data) => ({
    type: scholarship.GET_MY_TRANSACTIONS_REQUEST,
    data,
  }),

  searchScholarship: (searchText) => ({
    type: scholarship.SEARCH_SCHOLARSHIP_REQUEST,
    searchText,
  }),
};

export default scholarship;
