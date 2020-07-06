import React, { Component } from 'react';
import SocialIcon from '../SocialIcon';
import SOCIAL_ICONS from '../data/socialIcon';

class SocialProfile extends Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>Connect with me</h2>
                <div style={{textAlign: 'center'}}>
                {
                    SOCIAL_ICONS.map ( SOCIAL_ICON => {
                        return (
                            <SocialIcon key={SOCIAL_ICON.id} SocialIcon={SOCIAL_ICON} />
                        )
                    }
                        
                    )
                }
                </div>
            </div>
        )
    }
}

export default SocialProfile;