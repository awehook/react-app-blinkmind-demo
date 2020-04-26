import React, { Component } from "react";
import Mindmap from "./component/mindmap";

class Map extends Component {
    render() {
        return (
            <>
                {/* <Header />
                <Sidebar />
                <div className="dv"> */}
                    <Mindmap />
                {/* </div> */}
            </>
        )
    }
}

export default Map;