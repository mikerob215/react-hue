import React from 'react';
import {Link} from "react-router-dom";

const Light = ({lightId, light, onLightSelect}) => {
    return <Link
        to={`/light/${lightId}`}
        className="collection-item">
        {light.name}
        <span className="badge">
        {light.state.on ? 'On' : 'Off'}
        </span>
    </Link>;
};

export default Light;