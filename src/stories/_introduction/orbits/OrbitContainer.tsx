import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Rocket, Container } from './OrbitStyles'
import OrbitSwitch from './OrbitSwitch'
import { orbits } from '../constants/orbits'

const OrbitContainer = ({ setActiveItem }: any) => {
  const handleRocketHover = useCallback(() => setActiveItem(0), [setActiveItem])

  return (
    <Container>
      <Rocket onMouseOver={handleRocketHover} />
      {orbits.map(orbit => (
        <OrbitSwitch data={orbit} key={orbit.id} setActiveItem={setActiveItem} />
      ))}
    </Container>
  )
}

OrbitContainer.propTypes = {
  setActiveItem: PropTypes.func.isRequired
}

export default OrbitContainer
