import React, { Component } from 'react';

const SocialIcon = props => { 
    const {
        image,
        link,
    } = props.SocialIcon;

    return (
        <div style={{display: 'inline-block', paddingTop: 0, paddingBottom: 0, paddingRight: 6, paddingLeft: 6}}>
            
            <a href={link}>
                <img src={image} alt='social icon' style={{height: 30, width: 30, justifyContent: 'space-between'}}/>
            </a>    
        </div>
    )
}

export default SocialIcon;