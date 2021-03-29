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

const title: CSSProperties = {
    textAlign: 'center',
    margin: '1rem 1rem',
}

export default AdminPage