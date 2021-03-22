import { Component, createContext } from "react";


interface State {
    isFilled: boolean
}

interface ContextProps extends State {
    toggleFilled: (filled: boolean) => void;
}

export const ButtonContext = createContext<ContextProps>({
    isFilled: false, 
    toggleFilled: () => {}
});

class ButtonProvider extends Component<{}, State> {
  state: State = {
    isFilled: false
};

    toggleFilledState = (filled: boolean) => {
        this.setState({isFilled: filled})
        console.log(filled)
    }


  render() {
    return (
      <ButtonContext.Provider
        value={{
          ...this.state,
          toggleFilled: this.toggleFilledState
        }}

      >
        {this.props.children}
      </ButtonContext.Provider>
    );
  }
}

export default ButtonProvider;

