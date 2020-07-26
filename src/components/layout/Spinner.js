import React, {Fragment} from 'react';

const Spinner = () => <Fragment>
        <div className="ui segment">
            <p>Loading...</p>
            <div className="ui active dimmer">
                <div className="ui loader"></div>
            </div>
        </div>
    </Fragment>


export default Spinner;