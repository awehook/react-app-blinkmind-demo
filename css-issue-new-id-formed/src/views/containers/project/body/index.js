import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import DetailView from "./detail-view";
import { setActiveProjectMW } from "../../../../store/actions/edit-project";
import { connect } from "react-redux";

import "./index.scss";

const ProjectBody = ({ setActiveProjectMW }) => {

    const { id } = useParams();

    useEffect(() => {
        console.log("id param", id);
        setActiveProjectMW(id);
    }, []); 

    return (
        <div className="container">
            <Sidebar />
            <DetailView />
        </div>
    )
}

const mapStateToProps = state => {
    // console.log("inside mapStateToPros func in container component: calendar-view::", state);
    return {
        id: state.activeProject.id
    }
}

export default connect(
    mapStateToProps,
    {
        setActiveProjectMW
     }
)(ProjectBody);
