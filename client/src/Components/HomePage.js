import { Card, CardTitle, Button, Row, Col } from "reactstrap"
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            {/* <div className="jumbotron">
                <h1 className="display-4">Outpass Application</h1>
                <hr className="my-4" />
                <p>Online portal for outpass application</p>
            </div> */}
            <div>
                <Row>
                    <Col sm="6">
                        <Card
                            body
                            outline
                            style={{ margin: "50px" }}
                        >
                            <CardTitle tag="h5">
                                Outpass Application
                            </CardTitle>
                            <Button>
                                <Link to="/ApplicationForm">Click Here</Link>
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Card
                            body
                            outline
                            style={{ margin: "50px" }}
                        >
                            <CardTitle tag="h5">
                                Outpass Status
                            </CardTitle>
                            <Button>
                                <Link to="/StatusForm"> Click Here </Link>
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default HomePage