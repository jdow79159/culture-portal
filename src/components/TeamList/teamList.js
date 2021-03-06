import React from "react"
import AppImage from "../AppImage/AppImage"
import { getFields } from "../../utils/fields"
import Flip from 'react-reveal/Flip'

const TeamList = ({ team, source, lang }) => {
  return (
    <div className="row justify-content-center">
      {team.map(teammate => {
        return (
          <div className="col-lg-4 col-md-6 d-flex my-2" key={teammate.node.id}>
            <div className="card d-flex flex-column p-3 flex-grow-1">
              <div className="card-img-top">
                <Flip bottom duration={1000} delay={500}>
                  <AppImage src={teammate.node.frontmatter.photo} />
                </Flip>
              </div>
              <div className="flex-grow-1 d-flex flex-column">
                <h5 className="card-header">{teammate.node.frontmatter.name}</h5>
                <div className="card-body d-flex flex-column flex-grow-1">
                  <p className="flex-grow-1">{teammate.node.frontmatter.role}</p>
                  <p >{getFields('readyToWork', source, lang)}</p>
                  <a
                    href={teammate.node.frontmatter.github}
                    target="_blank"
                    role="button"
                    rel="noopener noreferrer"
                    className="btn-primary btn d-inline align-self-end"
                  >
                    {getFields('offerLabel', source, lang)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TeamList
