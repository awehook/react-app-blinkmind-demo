import React, { Component } from "react";
import Header from "../../fragments/header";
import ProjectBody from "./body";

import "./index.scss";

class Project extends Component {

    render() {
        return (
            <>
                <Header />
                <ProjectBody />
            </>
        )
    }
}

export default Project;