export interface FavIconProps {
  /**
   * Path to the image
   */
  favIconSource?: string
  /**
   * Path to the fallback image. This will be used when the onerror event occurs
   */
  defaultFavIcon?: string
}