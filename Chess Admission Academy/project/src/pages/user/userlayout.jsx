import propTypes from 'prop-types'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Userlayout = ({children}) => {
    return (
        <div style={{width: "100%", marginTop: "0%"}}>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
               <Footer/>
            </footer>
        </div>
    )
}

Userlayout.propTypes = {
    children : propTypes.node.isRequired
}

export default Userlayout