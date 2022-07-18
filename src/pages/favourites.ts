import '../style.css'

import { LoadFavouritesImages } from '../layout/LoadFavouritesImages'
import { ModalUpload } from '../components/ModalUpload'

document.addEventListener('DOMContentLoaded', () => {
  try {
    LoadFavouritesImages()
    ModalUpload()
    const buttonImgUpload = document.getElementById("uploadImg")
    buttonImgUpload?.addEventListener("click", () => {
      const bgShadow = document.querySelector("#bgShadow")
      bgShadow!.classList.toggle("hidden")
    })
  } catch(error: any) {
    console.log("Error: ", error.message)
  }
})