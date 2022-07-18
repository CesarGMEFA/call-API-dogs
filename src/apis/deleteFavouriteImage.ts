import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const API_IMAGES_FAVOURITE_DELETE = (favourite_id: string) => `https://api.thedogapi.com/v1/favourites/${favourite_id}`

const deleteFavouritesImages = async (favourite_id: string) => {
  const response = await fetch(API_IMAGES_FAVOURITE_DELETE(favourite_id), {
    method: 'DELETE',
    headers: {
      'X-API-KEY': 'ff039db9-9ef4-49e9-b70d-d9a0eba11604'
    }
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
      text: "Successfully remove",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();

    const deleteElement = document.getElementById(`${favourite_id}`)
    deleteElement?.remove()
  }

}

export { deleteFavouritesImages }