import React from 'react';
import Card from '@material-ui/core/Card';

function Return(props) {
    return(
        <div className='Return'>
            <Card className='bottomRight' onClick={() => props.setPageSelected("home")}>Home</Card>
        </div>
    );
}
export default Return;