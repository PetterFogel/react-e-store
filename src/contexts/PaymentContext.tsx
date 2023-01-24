import React, { Component, createContext } from "react";

interface BankCard {
  CCName: string;
  CCNumber: string;
  Expiration: string;
  CVC: string;
}

interface BankPayment {
  bankName: string;
  clearingNumber: string;
  accountNumber: string;
}
interface State {
  bankCard: BankCard;
  bankPayment: BankPayment;
  swishNumber: string;
  isFilled: boolean;
}

interface ContextProps extends State {
  addCCName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addCCNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addExpiration: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addCVC: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addCCObject: () => void;
  addSwish: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addCompleteSwish: () => void;
  addBankName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addClearingNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addAccountNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addBankInfo: () => void;
}

export const PaymentContext = createContext<ContextProps>({
  bankCard: {
    CCName: "",
    CCNumber: "",
    Expiration: "",
    CVC: "",
  },
  bankPayment: {
    bankName: "",
    clearingNumber: "",
    accountNumber: "",
  },
  swishNumber: "",
  isFilled: false,
  addCCName: () => {},
  addCCNumber: () => {},
  addExpiration: () => {},
  addCVC: () => {},
  addCCObject: () => {},
  addSwish: () => {},
  addCompleteSwish: () => {},
  addBankName: () => {},
  addClearingNumber: () => {},
  addAccountNumber: () => {},
  addBankInfo: () => {},
});

class PaymentProvider extends Component<any, State> {
  state: State = {
    bankCard: {
      CCName: "",
      CCNumber: "",
      Expiration: "",
      CVC: "",
    },
    bankPayment: {
      bankName: "",
      clearingNumber: "",
      accountNumber: "",
    },
    swishNumber: "",
    isFilled: false,
  };

  addCCNameToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bankCard: { ...this.state.bankCard, CCName: event.target.value },
    });
  };
  addCCNumberToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bankCard: { ...this.state.bankCard, CCNumber: event.target.value },
    });
  };
  addExpirationToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bankCard: { ...this.state.bankCard, Expiration: event.target.value },
    });
  };
  addCVCToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bankCard: { ...this.state.bankCard, CVC: event.target.value },
    });
  };

  addCCInputToObject = () => {
    if (
      this.state.bankCard.CCName !== "" &&
      this.state.bankCard.CCNumber !== "" &&
      this.state.bankCard.Expiration !== "" &&
      this.state.bankCard.CVC !== ""
    ) {
      this.setState({
        isFilled: true,
      });
    }
  };

  addSwishToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ swishNumber: event.target.value });
  };

  addCompleteSwishToState = () => {
    this.setState({ swishNumber: this.state.swishNumber, isFilled: true });
  };

  addAccountToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bankPayment: {
        ...this.state.bankPayment,
        accountNumber: event.target.value,
      },
    });
  };
  addClearingToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bankPayment: {
        ...this.state.bankPayment,
        clearingNumber: event.target.value,
      },
    });
  };
  addBanknameToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bankPayment: { ...this.state.bankPayment, bankName: event.target.value },
    });
  };

  addBankInfoToObject = () => {
    this.setState({ isFilled: true });
  };

  render() {
    return (
      <PaymentContext.Provider
        value={{
          ...this.state,
          addCCName: this.addCCNameToState,
          addCCNumber: this.addCCNumberToState,
          addExpiration: this.addExpirationToState,
          addCVC: this.addCVCToState,
          addCCObject: this.addCCInputToObject,
          addSwish: this.addSwishToState,
          addCompleteSwish: this.addCompleteSwishToState,
          addBankName: this.addBanknameToState,
          addAccountNumber: this.addAccountToState,
          addClearingNumber: this.addClearingToState,
          addBankInfo: this.addBankInfoToObject,
        }}
      >
        {this.props.children}
      </PaymentContext.Provider>
    );
  }
}

export default PaymentProvider;
