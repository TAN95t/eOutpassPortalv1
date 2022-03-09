import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import OutpassCard from './OutpassCard';
import axios from 'axios';

const Passes = () => {

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get('http://localhost:5000/outpass/')
    //         await setOutpass(response.data);
    //         console.log('data fetched from database');
    //     })();
    // }, []);

    // const renderCard = () => {
    //     console.log('renderCard called')
    //     return outpasses.map(outpass => {
    //         return <Outpass outpass={outpass} />
    //     })
    // }

    // const [state, dispatch] = useReducer(reducer, {
    //     firstname: '', lastname: '', email: '', phone: '',
    //     branch: '', regno: '', block: '', room: '', address1: '',
    //     address2: '', city: '', formState: '', zip: '', description: '',
    //     fromDate: new Date(), fromTime: '', toDate: new Date(), toTime: ''
    // });

    // let navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem('authtoken')) {
    //         console.log("authtoken", JSON.authtoken)
    //     }
    //     else {
    //         navigate("/login")
    //     }
    // })

    const [outpasses, setOutpass] = useState([]);

    async function fetchData() {
        try {
            const { data } = await axios.get('http://localhost:5000/api/v1/outpass')
            console.log(data.data)
            setOutpass(data.data)
        }
        catch (e) {
            console.log("error: ", e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container" style={{ display: "flex", justifyContent: "left space-evenly", flexWrap: "wrap" }}>
                {outpasses.map(ele => <OutpassCard outpass={ele} key={ele._id} />)}
            </div>
        </>
    )
}

export default Passes
