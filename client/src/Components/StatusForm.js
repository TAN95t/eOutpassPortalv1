import React from 'react'

const StatusForm = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <h1 className="text-center">Application Status</h1>
                </div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Email" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="number" className="form-label">Outpass Application Number</label>
                        <input type="int" className="form-control" placeholder="Application Number" id="inputPassword4"/>
                    </div>
                </form>
                <div className="d-grid gap-2 col-4 mx-auto my-4">
                    <button className="btn btn-primary" type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default StatusForm;
