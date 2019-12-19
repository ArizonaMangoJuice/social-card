import React from 'react';
import './index.css'

import Top from '../Top'
import Bottom from '../Bottom'

export default class MainCard extends React.Component {
    render(){
        return (
            <div className='main-card-container'>
                <Top />
                <Bottom />
            </div>
        )
    }
}