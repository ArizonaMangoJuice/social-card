import React from 'react';
import './index.css';

export default class Top extends React.Component{
    render(){
        return (
            <div className='top-container'>
                <div className='image-container'>
                    <img 
                        className='me'
                        src={require('../../images/isael.jpg')}></img>
                </div>
                <div className='bio-container'>
                    <h1 className='name no-margin no-padding align-left '>Isael Lizama</h1>
                    <h3 className='job-title no-margin no-padding align-left white'>MERN Stack Developer</h3>
                    <p className='description no-margin no-padding align-left white'>
                        Hi, my name is Isael Lizama. I'm a full stack developer that loves moba's and learning new ways to create 
                        cool web apps and designs. If you need a dev to talk to or work with don't hesitate to contact me.
                    </p>
                </div>
            </div>
        )
    }
}