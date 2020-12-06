import { useContext, useEffect, useRef, useState } from 'react';
import CountryContext from '../contexts/CountryContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CountryItem = styled.li`
  border-radius: 0.5rem;
  box-shadow: var(--main-shadow);
  opacity: ${(props) => (props.visible ? '1' : '0')};
  overflow: hidden;
  transform: ${(props) =>
    props.visible ? 'translateX(0)' : 'translateX(-30px)'};
  transition: opacity 0.3s, transform 0.5s;
`;

const CountryImage = styled.div`
  height: 160px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;

const CountryInformation = styled.div`
  background: var(--element-color);
  height: 100%;
  padding: 1.875rem 1.5rem;
`;

const CountryTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.li`
  font-size: 0.875rem;
  line-height: 1.6;

  span {
    font-weight: 600;
  }
`;

const CountryCard = ({
  code,
  image,
  name,
  population,
  region,
  capital,
  scroll,
}) => {
  const { countries } = useContext(CountryContext);
  const [visible, setVisible] = useState(false);
  const element = useRef();

  useEffect(() => {
    if (scroll + 300 >= element.current.offsetTop - window.innerHeight * 0.2) {
      setVisible(true);
    }
    return () => {
      setVisible(false);
    };
  }, [scroll, countries]);

  return (
    <CountryItem ref={element} visible={visible}>
      <Link to={`country/${code.toLowerCase()}`}>
        <CountryImage>
          <img src={image} alt={name} />
        </CountryImage>
        <CountryInformation>
          <CountryTitle>{name}</CountryTitle>
          <ul>
            <InfoItem>
              <span>Population: </span>
              {population.toLocaleString('en-US')}
            </InfoItem>
            <InfoItem>
              <span>Region: </span>
              {region}
            </InfoItem>
            <InfoItem>
              <span>Capital: </span>
              {capital}
            </InfoItem>
          </ul>
        </CountryInformation>
      </Link>
    </CountryItem>
  );
};

export default CountryCard;
