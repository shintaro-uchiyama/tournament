// ##############################
// // // App styles
// #############################

import { transition, container } from "../../../assets/jss/material-tournament-react";

const appStyle = {
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainPanel: {
        width: "100%",
        overflow: "auto",
        position: "relative",
        float: "right",
        ...transition,
        maxHeight: "100%",
        overflowScrolling: 'touch'
    },
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100% - 123px)"
    },
    container,
    map: {
        marginTop: "70px"
    }
};

export default appStyle;
