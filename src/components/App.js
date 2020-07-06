import React, { Component} from 'react';
import Project from './Project';
import SocialProfile from './SocialProfile';
import Jokes from './Jokes';
import Title from './Title';


class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <h1>Hello !</h1>
                <p> 
                    My name is Jim
                </p>
               <Title />
                <p>
                    I am always passionate about designing and developing on web projects
                </p>
                {this.state.displayBio ? (
                    <div>
                        <p>
                            I live in Brisbane, and code everyday
                        </p>
                        <p>
                            My favourite language is Js, and I think React.Js is awesome
                        </p>
                        <p>
                            Besides coding, I also love astronomy!
                        </p>
                        <button onClick={this.toggleDisplayBio}> Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={ this.toggleDisplayBio }> Read more </button>
                    </div>
                )
                }
                <hr />
                <Project />
                <hr />
                <SocialProfile />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;
