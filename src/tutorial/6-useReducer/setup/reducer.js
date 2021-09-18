export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeoples = [...state.people, action.payload];
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: "Item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Can not be empty",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let newPeoples = state.people.filter(
      (people) => people.id !== action.payload
    );
    return {
      ...state,
      people: newPeoples,
    };
  }
};
