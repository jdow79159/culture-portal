import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Navbar, Nav } from "react-bootstrap";
import LangMenu from "../LangMenu/LangMenu";


const Navigation = ({ location }) => {
  const { markdownRemark } = useStaticQuery(graphql`
{
  markdownRemark(frontmatter: {type: {eq: "navigation"}}) {
    frontmatter {
      navigations {
        name
        navigation {
          be
          en
          ru
        }
      }
    }
  }
}

  `)
  const navigationData = markdownRemark.frontmatter.navigations;
  const getLang = () => {
    switch (true) {
      case (location.pathname.indexOf('/ru/') !== -1): return 'ru';
      case (location.pathname.indexOf('/en/') !== -1): return 'en';
      default: return 'be';
    }
  }
  const lang = getLang();
  const getLabel = (name) => {
    return navigationData.find(el => el.name === name).navigation[lang];
  }
  const getLangPath = (l) => {
    switch (l) {
      case 'ru': return 'ru/';
      case 'en': return 'en/';
      default: return '';
    }
  }
  const onLinkClickHandler = (e, path) => {
    e.preventDefault();
    navigate(path + getLangPath(lang));
  }

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" onClick={(e) => onLinkClickHandler(e, '')} >Belarusian Filmmakers 📽️</Navbar.Brand>
      <LangMenu location={location} lang={lang} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="custom-mr_left">
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, '')}>{getLabel('main')}</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'search/')}>{getLabel('filmmakers')}</Nav.Link>
          <Nav.Link href="/">{getLabel('ourTeam')}</Nav.Link>
          <Nav.Link href="temp/worklog/">{getLabel('worklog')}</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'temp/styleguide/')}>{getLabel('styleguide')}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
