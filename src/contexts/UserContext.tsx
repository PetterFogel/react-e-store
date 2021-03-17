import { Component, createContext } from 'react'

interface State{
  name: string,
  adress: string, 
  phone: string, 
  email: string
}
interface ContextProp extends State {
  addName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addAdress: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addPhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addToObject: () => void;
}
export const UserContext = createContext<ContextProp>({
  name: "",
  adress: "", 
  phone: "", 
  email: '',
  addName: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addAdress: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addPhone: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addEmail: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addToObject: () => {}
});

export default class UserProvider extends Component<{}, State> {
  state: State = {
    name: "",
    adress: '',
    phone: "", 
    email: '',
  };

  addNameToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({name: event.target.value});
  };
  addAdressToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({adress: event.target.value});
  };
  addPhoneToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({phone: event.target.value});
  };
  addEmailToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({email: event.target.value});
  };

  addInputsToObject = () => {
    const newCustomer = {
      name: this.state.name,
      adress: this.state.adress, 
      phone: this.state.phone, 
      email: this.state.email
    }
    console.log(newCustomer)
    alert("Your personal details were added! Move on to the next step");
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          name: this.state.name,
          adress: this.state.adress, 
          phone: this.state.phone, 
          email: this.state.email,
          addName: this.addNameToState,
          addAdress: this.addAdressToState, 
          addPhone: this.addPhoneToState, 
          addEmail: this.addEmailToState,
          addToObject: this.addInputsToObject,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
