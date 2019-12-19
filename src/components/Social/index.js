import React from 'react'
import './index.css'

export default class Social extends React.Component{
    render(){
        return (
            <div className='social'>
                   <div className='social-container'>
                        <div className='bar'></div>
                        <div className='icon-container'>
                            <img className='icon-image' src={require('../../images/icons/user.png')}></img>
                        </div>
                        <p className='social-link white'> Isael Lizama</p>
                    </div> 
                    <div className='social-container'>
                        <div className='bar'></div>
                        <div className='icon-container'>
                            <img className='icon-image' src={require('../../images/icons/web.png')}></img>
                        </div>
                        <p className='social-link white'>www.isaellizama.com</p>{/*https://arizonamangojuice.github.io/portfolio/*/ }
                    </div>
                    <div className='social-container'>
                        <div className='bar'></div>
                        <div className='icon-container'>
                            <img className='icon-image' src={require('../../images/icons/email.png')}></img>
                        </div>
                        <p className='social-link white'>IsaelLizama@gmail.com</p>
                    </div>
                    <div className='social-container'>
                        <div className='bar'></div>
                        <div className='icon-container'>
                            <img className='icon-image' src={require('../../images/icons/phone.png')}></img>
                        </div>
                        <p className='social-link white'>720-237-8331</p>
                    </div>
                    <div className='social-container'>
                        <div className='bar'></div>
                        <div className='icon-container'>
                            <img className='icon-image' src={require('../../images/icons/location.png')}></img>
                        </div>
                        <p className='social-link white'>Greater Denver Area</p>
                    </div> 
            </div>
        )
    }
}