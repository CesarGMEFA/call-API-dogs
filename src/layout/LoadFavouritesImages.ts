import { getFavouritesImages } from '../apis/getFavouritesImages'
import { deleteFavouritesImages } from '../apis/deleteFavouriteImage'

import { DogCardFavourites } from '../components/DogCardFavourites'
import { EmptyFavourites } from '../components/EmptyFavourites'

async function LoadFavouritesImages() {
   
  try {
    const listImagesFavourites = document.querySelector<HTMLElement>('#listImagesFavourites')
    listImagesFavourites!.textContent = ''
    const data = await getFavouritesImages()
    
    if (data.length === 0) {
      EmptyFavourites()
    } else {
      DogCardFavourites(data, deleteFavouritesImages)
    }

   } catch(error) {
    console.log(error)
   }

}

export { LoadFavouritesImages }