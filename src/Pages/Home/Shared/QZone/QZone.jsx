import React from 'react';
import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-primary text-center mt-5 py-5'>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
    );
};

export default QZone;