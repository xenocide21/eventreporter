import React from "react";
import { Route } from 'react-router-dom'

import eventCardList from "./eventCardList";

function eventReport() {
    return (
        <Route path='/eventreport' component={eventCardList}/>
    )
}
export default eventReport