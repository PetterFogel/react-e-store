import  { useContext } from 'react'
import { CSSProperties } from "@material-ui/styles";
import { UserContext } from '../../../../contexts/UserContext';



const Dhl = () => {

    const addDetails = () => {
      let today = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(today.getDate() + (Math.floor(Math.random() * 3) + 1));
      console.log(tomorrow);
    }
    const value = useContext(UserContext)
    return (
      <div onClick={addDetails}>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', background: 'white', margin: '1rem'}}>
              <strong>DHL</strong>
              <span> 1 - 3 Days</span>
            </div>
      </div>
    );
}

export default Dhl