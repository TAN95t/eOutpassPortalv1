import { useState } from "react"
import { Popover, PopoverHeader, PopoverBody, Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap"
import Login from "./Login"

const LoginPrompt = () => {
    return (
        <div>
            <Offcanvas
                direction="top"
                isOpen="true"
            >
                <OffcanvasHeader>
                    Note!
                </OffcanvasHeader>
                <OffcanvasBody>
                    <strong>
                        You need to login first
                    </strong>
                    <Login />
                </OffcanvasBody>
            </Offcanvas>
        </div>
        // <div>
        //     <Popover
        //         flip
        //         target="Popover1"
        //         toggle={function noRefCheck() { }}
        //         isOpen="true"
        //     >
        //         <PopoverHeader>
        //             Popover Title
        //         </PopoverHeader>
        //         <PopoverBody>
        //             Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        //         </PopoverBody>
        //     </Popover>
        // </div>
    )
}

export default LoginPrompt