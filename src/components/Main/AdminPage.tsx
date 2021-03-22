import { CSSProperties } from '@material-ui/styles'
import React from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'

const AdminPage = () => {
    return (
        <div>
            <h1 style={title}>Admin</h1>
           <ItemList/>
           <AddItem/>
        </div>
    )
}

export default AdminPage

const title: CSSProperties = {
    textAlign: 'center',
    margin: '0rem 1rem',
}