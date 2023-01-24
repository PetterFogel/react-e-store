import { CircularProgress } from "@mui/material";
import React, { Component, CSSProperties } from "react";
import { CartContext } from "../../contexts/CartContext";

interface Props {
  children: any;
}
interface State {
  hidden: boolean;
}

class TimeOut extends Component<any, State> {
  context!: React.ContextType<typeof CartContext>;
  static contextType = CartContext;
  constructor(props: Props) {
    super(props);
    this.state = { hidden: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.context.emptyCart();
      this.setState({ hidden: false });
    }, 2000);
  }

  render() {
    return this.state.hidden ? (
      <div style={rootStyle}>
        <CircularProgress style={loaderStyle} />
      </div>
    ) : (
      this.props.children
    );
  }
}

const rootStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const loaderStyle: CSSProperties = {
  height: "10rem",
  width: "10rem",
};

export default TimeOut;
