import './style.css'

import { LoadImages } from './layout/LoadImages'

// const spanError = document.querySelector<HTMLSpanElement>('#spanError')

document.addEventListener('DOMContentLoaded', () => {
  LoadImages()
})

const loadMore = document.querySelector<HTMLButtonElement>("#loadMore")
loadMore!.onclick = () => LoadImages()