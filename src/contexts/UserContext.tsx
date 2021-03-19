import React, { Component, createContext } from 'react'

interface Customer {
  name: string, 
  adress: string, 
  phone: string, 
  email: string
  zip: string, 
}

interface Delivery {
  company: string, 
  date: string
}

interface State{
  name: string,
  adress: string, 
  phone: string, 
  email: string, 
  zip: string,
  user: Customer, 
  delivery: Delivery, 
  company: string, 
  date: string
}
interface ContextProp extends State {
  addName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addAdress: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addPhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addZip: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addToObject: (event: React.FormEvent) => void;
  addDelivery: (deliverCompany: string, randomDay: number, addNumber: number) => void; 
}
export const UserContext = createContext<ContextProp>({
  name: "",
  adress: "", 
  phone: '', 
  email: '',
  zip: '',
  user: {
    name: "",
    adress: '',
    phone: '', 
    email: '',
    zip: ''
  },
  delivery: {
    company: '', 
    date: ''
  },
  date: '', 
  company: '',
  addName: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addAdress: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addPhone: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addEmail: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addZip: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addToObject: (event: React.FormEvent) => {},
  addDelivery: (deliverCompany: string, randomDay: number, addNumber: number) => {}
});

export default class UserProvider extends Component<{}, State> {
  state: State = {
    name: "",
    adress: '',
    phone: '', 
    email: '',
    zip: '',
    user: {
      name: "",
      adress: '',
      phone: '', 
      email: '',
      zip: ''
    },
    delivery: {
      company: '', 
      date: ''
    },
    date: '', 
    company: '',
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
  addZipToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({zip: event.target.value});
  };

  addDeliveryToState = (deliverCompany: string, randomDay: number, addNumber: number) => {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + (Math.floor(Math.random() * randomDay) + addNumber));
    let deliverDay = tomorrow.toString().split(' ')[0]
    let deliverDate = tomorrow.toString().split(' ')[2]
    let deliverMonth = tomorrow.toString().split(' ')[1]
    
    if(deliverCompany == 'Bring') {
      this.setState({
        company: deliverCompany,
        date: deliverDay + ' ' + deliverDate + ' ' + deliverMonth
      })
    } else if(deliverCompany == 'DHL') {
      this.setState({
        company: deliverCompany,
        date: deliverDay + ' ' + deliverDate + ' ' + deliverMonth
      })
    } else if(deliverCompany == 'Postnord') {
      this.setState({
        company: deliverCompany,
        date: deliverDay + ' ' + deliverDate + ' ' + deliverMonth
      })
    }
  }

  addInputsToObject = (event: React.FormEvent) => {
    const newCustomer = {
      name: this.state.name,
      adress: this.state.adress, 
      phone: this.state.phone, 
      email: this.state.email,
      zip: this.state.zip
    }
    
    // if(
    //   this.state.name !== '' 
    //   && 
    //   this.state.adress !== ''
    //   &&
    //   this.state.phone !== '' 
    //   &&
    //   this.state.email !== ''
    //   &&
    //   this.state.zip !== ''
    //   ) {
    //     if (this.state.zip.length < 5 || this.state.zip.length >= 6) {
    //       event.preventDefault();
    //       alert("test")
    //     } else {
    //       event.preventDefault();
    //       this.setState({user: newCustomer})
    //       console.log(newCustomer)
    //     }
    //   }


    // Name Input 
  if (this.state.name !== "") {

    // Adress Input
    if (this.state.adress !== "") {

      // Phone Input
      if (this.state.phone !== "") {

        // Email Input
        if (this.state.email !== "") {
          if (this.state.email.includes("@")) {
            event.preventDefault();
            // Zip Input
            if (this.state.zip !== "") {
              if (this.state.zip.length < 5 || this.state.zip.length >= 6) {
                event.preventDefault();
              } else {
                event.preventDefault();
                this.setState({user: newCustomer})
                console.log(newCustomer)
              }
            }
          }
        } 
      }
    }
  }
}

  render() {
    return (
      <UserContext.Provider
        value={{
          name: this.state.name,
          adress: this.state.adress, 
          phone: this.state.phone, 
          email: this.state.email,
          zip: this.state.zip,
          user: {
            name: this.state.user.name,
            adress: this.state.user.adress,
            phone: this.state.user.phone,
            email: this.state.user.email,
            zip: this.state.zip
          },
          delivery: {
            company: this.state.company, 
            date: this.state.date
          },
          date: this.state.date, 
          company: this.state.company,
          addName: this.addNameToState,
          addAdress: this.addAdressToState, 
          addPhone: this.addPhoneToState, 
          addEmail: this.addEmailToState,
          addZip: this.addZipToState,
          addToObject: this.addInputsToObject,
          addDelivery: this.addDeliveryToState
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
