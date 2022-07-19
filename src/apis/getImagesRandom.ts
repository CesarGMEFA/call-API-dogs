const API_IMAGES_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=8&page=10&order=Desc'

const getImagesRandom = async () => {
  const response = await fetch(API_IMAGES_RANDOM)

  if (response.status != 200) {
    const spanError = document.querySelector<HTMLSpanElement>("#spanError")
    spanError!.className = "text-center text-xl font-bold py-8 px-6 mt-10 mx-16 rounded border-4 border-rose-500"
    spanError!.textContent = `There was an error: ${response.status}`
  } else {
    return await response.json()
  }
}

export { getImagesRandom }