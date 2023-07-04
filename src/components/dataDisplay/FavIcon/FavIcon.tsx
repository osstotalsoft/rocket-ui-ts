import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { FavIconProps } from './types'
import { is } from 'ramda'
/**
 * The FavIcon component sets the favicon displayed by the browser on the website's tab
 * The html <link> of the icon must have an id attribute of 'favicon'
 */
const FavIcon: React.FC<FavIconProps> = ({ favIconSource, defaultFavIcon }) => {
  const onError = useCallback(
    (event: string | Event, favicon: HTMLLinkElement) => {
      favicon.href = defaultFavIcon || '#'
      if (is(String, event)) return
      const target = event.target as HTMLImageElement
      target.onerror = null
    },
    [defaultFavIcon]
  )

  const setFavIcon = useCallback(                                                  
    (source: string) => {
      const favicon = document.getElementById('favicon') as HTMLLinkElement || top.document.getElementById('favicon') as HTMLLinkElement
      const img = new Image()
      img.onerror = (event: string | Event) => onError(event, favicon)
      img.onload = () => (favicon.href = source || '#')
      img.src = source
    },
    [onError]
  )

  useEffect(() => {
    setFavIcon(favIconSource)
  }, [favIconSource, setFavIcon])

  return <></>
}

FavIcon.propTypes = {
  /**
   * URL of the favicon image
  */
  favIconSource: PropTypes.string,
  /**
   * URL of the fallback image. This will be used when the onerror event occurs
  */
  defaultFavIcon: PropTypes.string
}

export default FavIcon
