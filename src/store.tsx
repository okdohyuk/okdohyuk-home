import { createStore } from 'redux';

import ssr from 'lib/boards/ssr/ssr';
import doom from 'lib/boards/doom/doom';
import tagplus from 'lib/boards/tagplus/tagplus';

const BOARD_READ = 'ONE';
const BOARD_LIST = 'LIST';

export const board_read = (key: number) => ({
  type: BOARD_READ,
  key: key,
});

export const board_list = () => ({ type: BOARD_LIST });

const initialState = {
  maxNo: 5,
  boards: [
    {
      id: ssr.id,
      title: ssr.title,
      introduce: ssr.introduce,
      image: ssr.image,
      text: ssr.text,
    },
    {
      id: doom.id,
      title: doom.title,
      introduce: doom.introduce,
      image: doom.image,
      text: doom.text,
    },
    {
      id: tagplus.id,
      title: tagplus.title,
      introduce: tagplus.introduce,
      image: tagplus.image,
      text: tagplus.text,
    },
  ],
};

const reducer = (state = initialState, action: any) => {
  let boards = state.boards;

  switch (action.type) {
    case BOARD_READ:
      return {
        ...state,
        selectedBoard: boards.find((row) => row.id === action.id),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
