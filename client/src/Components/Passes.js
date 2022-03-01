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

    useEffect(() => {
        axios.get('http://localhost:5000/outpass/')
            .then(response => setOutpass(response.data))
            .catch(err => console.log(err));
        console.log('data fetched from database');
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
