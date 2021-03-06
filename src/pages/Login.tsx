import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SpotifyAuthListener } from 'react-spotify-auth';
import styled from 'styled-components';
import bgImage from './bgImage.png';
import SpotifyLoginButton from '../components/SpotifyLoginButton';
import UserContext from '../context/user/UserContext';
import {
  BACKGROUND_COLOR,
  LONG_FONT_SIZE,
  PRIMARY_COLOR,
  SECONDARY_FONT_FAMILY,
  TEXT_PRIMARY_COLOR,
} from '../styles/variables';
import { useHistory } from 'react-router-dom';

interface Props { }

const StyledLoginContainer = styled.div``;

const BgImage = styled.div`
  /* The image used */
  background-image: url(${bgImage});

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.1);
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index: -1;
  opacity: .9;
`;

const StyledLayout = styled.div`
  color: ${TEXT_PRIMARY_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMainLink = styled.p`
  justify-self: center;
  color: ${PRIMARY_COLOR};
  outline: none;
  text-decoration: none;
  font-family: ${SECONDARY_FONT_FAMILY};
  font-size: ${LONG_FONT_SIZE};
  text-shadow: 2px 2px ${BACKGROUND_COLOR};
`;

const StyledCenteredDiv = styled.div`
  text-align: center;
`;

const Login: React.FC<Props> = () => {
  const { startSession, isLogged } = useContext(UserContext);
  const history = useHistory();

  isLogged && isLogged() && history.push('/');

  return (
    <>
      <BgImage></BgImage>
      <StyledLayout>
        <StyledLoginContainer>
          <StyledCenteredDiv>
            <StyledMainLink>song𝓢hare</StyledMainLink>
            <SpotifyLoginButton />
          </StyledCenteredDiv>
        </StyledLoginContainer>
      </StyledLayout>
      <SpotifyAuthListener
        onAccessToken={(token: string) => {
          startSession && startSession();
          history.push('/');
        }}
      />
    </>
  );
};

export default Login;
