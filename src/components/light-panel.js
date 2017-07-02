import React from 'react';

const LightPanel = ({lights}) =>
    <div className="row">
        <div className="column">
            {lights.map(light => <p>{light.name}</p>)}
        </div>
    </div>;

export default LightPanel;