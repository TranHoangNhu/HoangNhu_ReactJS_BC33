const studentDefault = {
  arrStudent: [
    {
      id: 1,
      name: "product 1",
      price: 1000,
      image: "https://picsum.photos/id/1/50/50",
      description: "desc prod 1",
    },
    {
      id: 2,
      name: "product 2",
      price: 1000,
      image: "https://picsum.photos/id/2/50/50",
      description: "desc prod 2",
    },
  ],
};

export const StudentManageReducer = (state = studentDefault, action) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      const arrStudentUpdate = [...state.arrStudent, action.student];
      state.arrStudent = arrStudentUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
