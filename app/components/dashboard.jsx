import React from 'react'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1>Sport Scheduler Nav Bar</h1> {/*add here for now, should change to component*/}
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>dashboard pt1</h2>
                        </div>
                        <div className="col-lg-6">
                            <h1>dashboard pt2</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}