import  { useContext } from 'react'
import { CSSProperties } from "@material-ui/styles";
import { UserContext } from '../../../../contexts/UserContext';



const Bring = () => {

    const addDetails = () => {
      let today = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(today.getDate() + (Math.floor(Math.random() * 5) + 3));
      console.log(tomorrow);
    }
    const value = useContext(UserContext)
    return (
      <div onClick={addDetails}>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', background: 'white', margin: '1rem'}}>
              <strong>Bring</strong>
              <span> 3 - 5 Days</span>
            </div>
      </div>
    );
}

export default Bring