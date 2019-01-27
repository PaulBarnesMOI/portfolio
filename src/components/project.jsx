import React from 'react'

import Technologies from './technologies'
import Work from './recentWork'
import projects from '../data/projects'

class Project extends React.Component {

    // Get other projects with some similar tags
    similarProjects = projects.filter(project => {
        let similarProjectFound = false

        this.props.tags.forEach(tag => {
            if (project.tags.includes(tag)) {
                similarProjectFound = true
            } 
        })

        return similarProjectFound && this.props.id != project.id
    })

    contentCopy = this.props.content.copy.map((copy, index) => {
        return (
            <p key={index}>{copy}</p>
        )
    })

    cta() {
        const cta = this.props.intro.cta

        if (cta) {
            return (
                <div className="section__link">
                    <a href={cta.href} target="_blank" className="button">
                        {cta.copy}
                    </a>
                </div>
            )
        }
    }

    componentDidMount() {
       this.cta()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="section">
                        <div className="section__image">
                            <img src={this.props.intro.image.src} alt={this.props.intro.image.src} />
                        </div>
                        <div className="section__image section__image--small">
                            <img src={this.props.client.logo.image} alt={this.props.client.logo.alt} />
                        </div>
                        <div className="section__title">
                            {this.props.intro.title}
                        </div>
                        <div className="section__copy">
                            {this.props.intro.copy}
                        </div>
                        {this.cta()}
                    </div>
                </div>
                <div className="section section--bgColoured section--overlayed-small">
                    <div className="container">
                        <div className="section__copy section__copy--noMargin">
                            {this.contentCopy}
                        </div>
                    </div>
                </div>
                <Technologies icons={this.props.technologies}/>
                <Work title="Similar Work" projects={this.similarProjects}/>
            </div>
        )
    }
}

export default Project