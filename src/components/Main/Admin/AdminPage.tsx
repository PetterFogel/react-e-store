import { CSSProperties } from '@material-ui/styles'
import AddItem from './AddItem'
import AdminHandler from './AdminHandler'

const AdminPage = () => {
    return (
        <div>
            <h1 style={title}>Admin</h1>
           <AdminHandler/> 
           <AddItem/>
        </div>
    )
}

export default AdminPage

const title: CSSProperties = {
    textAlign: 'center',
    margin: '0rem 1rem',
}