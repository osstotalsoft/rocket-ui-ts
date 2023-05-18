import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { MaterialOrbit, GitHubOrbit, BitOrbit } from './OrbitStyles'

const OrbitSwitch = ({ data, setActiveItem }: any) => {
  const { id, website, orbitColor } = data

  const handleOrbitHover = useCallback(() => setActiveItem(id), [id, setActiveItem])

  const orbitProps = {
    href: website,
    orbitColor,
    target: '_blank',
    onMouseOver: handleOrbitHover
  }

  const orbitSwitch = () => {
    switch (data.id) {
      case 1:
        return <MaterialOrbit {...orbitProps} />
      case 2:
        return <GitHubOrbit {...orbitProps} />
      case 3:
        return <BitOrbit {...orbitProps} />
    }
  }

  return <>{orbitSwitch()}</>
}

OrbitSwitch.propTypes = {
  data: PropTypes.object.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

export default OrbitSwitch
