import React from 'react';
import './index.css'
import Social from '../Social'

export default class Bottom extends React.Component{
    render(){
        return (
            <div className='bottom-container'>
                <div className='connect-container'>
                    <p className='big-p white'><span className='light-blue'>Connect</span> With Me</p>
                </div>
                <div className='bar-shadow'></div>
                <Social />
            </div>
        )
    }
}