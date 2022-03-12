import React from 'react'

const StatusForm = () => {
    return (
        <div>
            <div className="container my-5 formatting">
                <div className="row">
                    <h1 className="text-center">Application Status</h1>
                </div>
                <form className="row g-3">
                    <div className="col-md-6 offset-1 offset-md-3 mt-5">
                        <label htmlFor="number" className="form-label">Outpass Application Number</label>
                        <input type="int" className="form-control" placeholder="Application Number" id="inputPassword" />
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
