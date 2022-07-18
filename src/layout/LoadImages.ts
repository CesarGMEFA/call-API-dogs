import { getImagesRandom } from '../apis/getImagesRandom'
import { postFavouritesImages } from '../apis/postFavouriteImages'

import { DogCard } from '../components/DogCard'

async function LoadImages() {

  try {
    const data = await getImagesRandom()
    DogCard(data, postFavouritesImages)
    
  } catch (error) {
    console.log(error);
  }

}

export { LoadImages }