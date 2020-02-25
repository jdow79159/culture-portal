import React from 'react';
import { navigate } from "gatsby"
import { DropdownButton, Dropdown } from 'react-bootstrap';

const LangMenu = ({ location, lang }) => {
  const onLinkClickHandler = (path) => {
    if (location.pathname === '/temp/worklog/') return;
    if (lang === 'ru' || lang === 'en') {
      navigate(location.pathname.slice(0, -4) + path)
    } else {
      navigate(location.pathname + path)
    }
  }


  return (
    <DropdownButton alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      title={lang}>
      <Dropdown.Item as="button" onClick={() => onLinkClickHandler('/en/')} data-lang="en">EN</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => onLinkClickHandler('')} data-lang="be">BY</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => onLinkClickHandler('/ru/')} data-lang="ru">RU</Dropdown.Item>
    </DropdownButton>
  )
}

export default LangMenu;
