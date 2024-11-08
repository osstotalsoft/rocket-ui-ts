import styled from '@emotion/styled'
import { css } from '@emotion/css'
import materialImage from '../../assets/img/satellite.png'
import githubImage from '../../assets/img/spaceship.png'
import bitImage from '../../assets/img/robot.png'
import rocketImage from '../../assets/img/rocket.png'
import { Link } from '@mui/material'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`

export const Orbit = styled(Link, { shouldForwardProp: prop => prop !== 'orbitColor' })`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(102, 166, 229, 0.12);
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  transition: border 300ms ease;

  &::before {
    position: absolute;
    content: '';
    transform: translate(-50%, -50%);
    border-radius: 100px;
    transition: transform 300ms ease;
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @media (min-width: 768px) {
    &:hover {
      border: 1px solid ${(props: any) => props.orbitColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      border: 1px solid ${(props: any) => props.orbitColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    ${(props: any) =>
      props.isActive
        ? css`
            border: 1px solid ${props.orbitColor};
            &::before {
              transform: scale(1.5) translate(-50%, -50%);
            }
          `
        : ''};
  }
`

export const Rocket = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 256px;
  width: 256px;
  border-radius: 1000px;
  background-image: url(${rocketImage});
  background-size: cover;
  box-shadow:
    0 0 10px 2px rgba(255, 107, 0, 0.4),
    0 0 22px 11px rgba(255, 203, 0, 0.13);
  transform: translate(-50%, -50%);
  z-index: 150;
`

export const MaterialOrbit = styled(Orbit)`
  width: 310px;
  height: 310px;
  animation: orbit 12.1867343561s linear infinite;
  z-index: 100;

  &::before {
    height: 80px;
    width: 80px;
    left: 75%;
    background-image: url(${materialImage});
    background-size: cover;
  }
`

export const GitHubOrbit = styled(Orbit)`
  width: 480px;
  height: 480px;
  animation: orbit 18.4555338265s linear infinite;
  z-index: 99;

  &::before {
    height: 74px;
    width: 74px;
    left: 28%;
    background-image: url(${githubImage});
    background-size: cover;
  }
`

export const BitOrbit = styled(Orbit)`
  width: 660px;
  height: 660px;
  animation: orbit 30s linear infinite;
  z-index: 98;

  &::before {
    width: 70px;
    height: 70px;
    left: 50%;
    background-image: url(${bitImage});
    background-size: cover;
  }
`
