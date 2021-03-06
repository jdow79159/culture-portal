import React from "react"
import AppImage from "../AppImage/AppImage"
import { navigate } from "gatsby"
import { getLangPath } from "../../utils/language"

const getDate = () => {
  let date = new Date();
  return Number(date.toLocaleString('en-US', { day: 'numeric' }));
}

const DayAuthor = ({ authorsList, labelMore='More details', lang}) => {
  if(!authorsList.length) return <p>No data</p>;

  const date = getDate();
  const currentAuthor = date % (authorsList.length - 1);
  const authorData = authorsList[currentAuthor].frontmatter;

  return (
    <div className="row align-items-center">
      <div className="col-sm-5 col-md-3 py-2">
        <div>
        <AppImage src={authorData.imagepath} />
        </div>
      </div>
      <div className="col-sm-7 col-md-9 d-flex flex-column align-self-center py-2">
        <h1>{authorData.title}</h1>
        <h4>{authorData.directorsLifeYears}</h4>
        <h4> {authorData.city}</h4>
        <p className="text-justify">{authorData.titleText}</p>
        <div>
        <button type="button" className="btn btn-primary d-inline" onClick={(e)=>{
          e.preventDefault();
          navigate(`directors/${authorData.slug}/${getLangPath(lang)}`);
        }}>{labelMore}</button>
        </div>
      </div>
    </div>
  )
}

export default DayAuthor;
