import React, { Component } from 'react';
import PROJECTS from '../data/project';
import ProjectNew from '../ProjectNew';


class Project extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                            <ProjectNew key={PROJECT.id} project={PROJECT} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Project;