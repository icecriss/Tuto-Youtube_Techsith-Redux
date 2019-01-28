
const initialState = {
  age: 21,
  history: [{ age: 21, id: Math.random() }],
};

// export default (state = initialState, { type, payload }) => {
export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {

    case 'AGE_UP':
      return {
        ...state,
        age: state.age + action.payload,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.payload,
        }),
      }
    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age + action.payload,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.payload,
        }),
      }
    case 'DEL_ITEM':
      return {
        ...state,
        history: state.history.filter(el => el.id !== action.key)
      }
    default:
      return newState;
  }
}




