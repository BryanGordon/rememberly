import type { Image } from '../types/types'

const host = import.meta.env.VITE_URL_PROD

export const getFunctions = () => {
  const data: Promise<Image[]> = fetch(host)
      .then(res => res.json())

  return { data }  
}