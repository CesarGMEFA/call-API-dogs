import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const API_IMAGES_FAVOURITE = 'https://api.thedogapi.com/v1/favourites'

const postFavouritesImages = async (id: string) => {
  const response = await fetch(API_IMAGES_FAVOURITE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'ff039db9-9ef4-49e9-b70d-d9a0eba11604'
    },
    body: JSON.stringify({
      image_id: id,
      "sub_id": "your-user-1234"
    })
  })

  if (response.status != 200) { 
    Toastify({
      text: `Error: ${response.status}`,
      duration: 6000,
      style: {
        background: "linear-gradient(to right, #f35858, #ff0000)",
      },
    }).showToast();
  } else {
    Toastify({
      text: "Successfully added",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  
    return await response.json()
  }
}

export { postFavouritesImages }