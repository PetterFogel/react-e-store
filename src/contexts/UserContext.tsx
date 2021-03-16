import { Component, createContext } from 'react'

interface State{
    name: string,
}
interface ContextProp extends State {
  addName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
}
export const UserContext = createContext<ContextProp>({
  name: "",
  addName: (event: React.ChangeEvent<HTMLInputElement>) => {},
});

export default class UserProvider extends Component<{}, State> {
  state: State = {
    name: "",
  };

  addNameToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({name: event.target.value});
    console.log(this.state.name);
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          name: this.state.name,
          addName: this.addNameToState,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
