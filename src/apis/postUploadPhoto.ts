import { postFavouritesImages } from "./postFavouriteImages"
import { LoadFavouritesImages } from "../layout/LoadFavouritesImages"

const API_URL_UPLOAD = "https://api.thedogapi.com/v1/images/upload"

const postUploadPhoto = async () => {
  const form = document.querySelector<HTMLFormElement>("#uploadingForm")!
  console.log(form)
  const formData = new FormData(form);
  console.log(formData.get("file"))

  const response = await fetch(API_URL_UPLOAD, {
    method: 'POST',
    headers: {
      'X-API-KEY': 'ff039db9-9ef4-49e9-b70d-d9a0eba11604'
    },
    body: formData
  })
  const data = await response.json()

  if (response.status !== 201) {
    const spanError = document.querySelector<HTMLSpanElement>("#spanError")
    spanError!.className = "text-center text-xl font-bold py-8 px-6 mt-10 mx-16 rounded border-4 border-rose-500"
    spanError!.textContent = `There was an error: ${response.status}`
  } else {
    postFavouritesImages(data.id)
    setTimeout(function(){
      LoadFavouritesImages()
    }, 2000)
  }

}

export { postUploadPhoto }