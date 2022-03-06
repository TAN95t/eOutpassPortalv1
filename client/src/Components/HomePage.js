import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">E-Outpass Portal</h1>
                <hr className="my-4" />
                <p>Online portal for outpass application</p>
            </div>
            <div className="container">
                <hr style={{ height: "5px", margin: "5rem 19rem", width: "50%", backgroundColor: "rgb(47, 223, 179)", color: "rgb(47, 223, 179)" }} />
                <div className="row row-content mt-2">
                    <div className="col-12 col-md-4 offset-1 offset-md-4">
                        <Link to="/ApplicationForm" className="homeLink"><h1>Outpass Application</h1></Link>
                    </div>
                </div>
                <div className="row row-content mt-5">
                    <div className="col-12 col-md-4 offset-1 offset-md-4">
                        <Link to="/Passes" className="homeLink"><h1>Outpass Status</h1></Link>
                    </div>
                </div>
                <hr style={{ height: "5px", margin: "5rem 19rem", width: "50%", backgroundColor: "rgb(47, 223, 179)", color: "rgb(47, 223, 179)" }} />
                <div className="row mt-4">
                    <div className="col-12 col-md-4 offset-1 offset-md-4"></div>
                </div>
            </div>

        </>
    )
}
export default HomePage