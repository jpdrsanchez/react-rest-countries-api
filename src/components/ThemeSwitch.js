import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Switch = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  font-weight: 600;
  outline: 0;

  *:first-child {
    margin-right: 0.5rem;
  }
`;

const ThemeSwitch = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const isDarkDefault = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;
      localStorage.setItem('theme', isDarkDefault ? 'dark' : 'light');
      if (isDarkDefault) {
        setDark((dark) => !dark);
      }
    } else {
      const theme = localStorage.getItem('theme');
      setDark(theme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <Switch onClick={() => setDark(!dark)}>
      <FontAwesomeIcon icon={dark ? solid.faMoon : regular.faMoon} /> Dark Mode
    </Switch>
  );
};

export default ThemeSwitch;
