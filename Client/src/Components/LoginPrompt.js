import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const LoginPrompt = ({ data, linkTo, dataFor }) => {

    const token = localStorage.getItem('authtoken')
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen)
    }

    console.log(dataFor + ' ' + isPopoverOpen)

    if (token) {
        return (
            <Link to={linkTo} className="homeLink">{data}</Link>
        )
    }
    else {
        return (
            <>
                <Button onClick={togglePopover} id={dataFor} className='togglePopover homeLink'>
                    {data}
                    {/* <Link to="/" className="homeLink disabledCursor" onClick={(e) => { e.preventDefault() }}></Link> */}
                </Button>
                <Popover
                    flip
                    target={dataFor}
                    trigger="legacy"
                    toggle={togglePopover}
                    isOpen={isPopoverOpen}
                >
                    <PopoverHeader>
                        You need to Login first
                    </PopoverHeader>

                </Popover>
            </>
        )
    }

}

export default LoginPrompt