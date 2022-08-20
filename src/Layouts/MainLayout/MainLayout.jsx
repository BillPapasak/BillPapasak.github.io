import Navbar from "../../components/Navbar/Navbar"

const MainLayout = ({ children }) => {

    //const [showForm, setShowForm] = useState(false)

    return (

        <>
            <Navbar />
            <div className="main">
                { children }
            </div>
            
        </>
    )
}

export default MainLayout