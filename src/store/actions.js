export const TOGGLE_ALL = 'TOGGLE_ALL';
export const TOGGLE_TRANSFER = 'TOGGLE_TRANSFER';
export const SET_SORT = 'SET_SORT';

export const toggleAll = () => {
  return {
    type: TOGGLE_ALL,
  };
};

export const toggleTransfer = (transferValue) => {
  return {
    type: TOGGLE_TRANSFER,
    payload: transferValue,
  };
};

export const setSort = (sortValue) => {
  return {
    type: SET_SORT,
    payload: sortValue,
  };
};
