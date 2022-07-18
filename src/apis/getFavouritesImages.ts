const API_IMAGES_FAVOURITE = 'https://api.thedogapi.com/v1/favourites'

const getFavouritesImages = async () => {
  const response = await fetch(API_IMAGES_FAVOURITE, {
    method: 'GET',
    headers: {
      'X-API-KEY': 'ff039db9-9ef4-49e9-b70d-d9a0eba11604'
    }
  })

  if (response.status != 200) {
    const spanError = document.querySelector<HTMLSpanElement>("#spanError")
    spanError!.className = "text-center text-xl font-bold py-8 px-6 mt-10 mx-16 rounded border-4 border-rose-500"
    spanError!.textContent = `There was an error: ${response.status}`
  } else {
    return await response.json()
  }
}

export { getFavouritesImages }