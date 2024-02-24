import { Dashboard } from '@mui/icons-material'
import React from 'react'
import propTypes from 'prop-types';
import Sidebar from '../../components/sidebar';
function Adminlayout({children}) {
  return (
    <div style={{width: "100%", marginTop: "0%"}}>
    <header>
       <Sidebar/>
    </header>
    <main>
        {children}
    </main>
    {/* <footer>
       <Footer/>
    </footer> */}
</div>
  )
}
Adminlayout.propTypes = {
    children : propTypes.node.isRequired
}

export default Adminlayout
