import React from 'react';

const ProgressBar = (props) => {
    const {perecent} = props;



    return (
        <div class="progress">
            <div className={"progress-value-base " + "progress-value-" + perecent}></div>
        </div>
    )
}

export default ProgressBar;