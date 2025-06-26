import type { Image } from '../types/types'

export const getFunctions = () => {
  const data: Promise<Image[]> = fetch('https://rememberly-1xpo.onrender.com/images')
      .then(res => res.json())

  return { data }  
}