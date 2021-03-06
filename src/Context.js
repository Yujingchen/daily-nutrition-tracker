import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ENTRY":
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.payload)
      };
    case "ADD_ENTRY":
      return {
        ...state,
        entries: [action.payload, ...state.entries]
      };
    case "ADD_GOAL":
      return {
        goal: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    goal: {
      fat: 0,
      carbs: 0,
      protein: 0,
      calories: 0
    },
    entries: [
      {
        id: "1",
        name: "Potatoes",
        carb: 10,
        fat: 5,
        protein: 6,
        servings: 2,
        calories: 200
      },
      {
        id: 2,
        name: "Chicken",
        carb: 8,
        fat: 0.7,
        protein: 20,
        servings: 2,
        calories: 300
      }
    ],

    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
