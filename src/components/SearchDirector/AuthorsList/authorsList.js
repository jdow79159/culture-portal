import React from 'react';
import Image from '../../../components/AppImage/AppImage';
import { Button } from 'react-bootstrap';
import {navigate} from 'gatsby';
import { getLangPath } from "../../../utils/language"
import { getFields } from "../../../utils/fields"

import '../../../../node_modules/aos/dist/aos.css'; 
import './authorsList.css';

const AuthorList = ({ list, lang, sourceFields }) => {
    const items = list.map((author) => {
        return (
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 col-xl-4 mb-5 card-wrapper"
                key={author.name}>
                <div className="card h-100"  data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <div className="card-body d-flex flex-column">
                    <a href="/" onClick={(e)=>{
                                e.preventDefault();
                                navigate(`directors/${author.slug}/${getLangPath(lang)}`);
                            }}>
                        <Image
                            src={author.pathname}
                            alt={author.name}
                        />
                        </a>
                        <h4 className="author-name">
                            {author.name}
                        </h4>
                        <h5>{author.city}</h5>
                        <div className="card-text flex-grow-1">
                          <p className='author-years'>{author.bday}</p>
                          <p className='author-title'>{author.titleText}</p>
                        </div>
                        <div className="link-wrapper">
                            <Button href={author.slug} variant="info" className="btn btn-info" onClick={(e)=>{
                                e.preventDefault();
                                navigate(`directors/${author.slug}/${getLangPath(lang)}`);
                            }}>
                                {getFields('labelMore', sourceFields, lang)}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row align-items-stretch">
            {items}
        </div>
    )
}

export default AuthorList
