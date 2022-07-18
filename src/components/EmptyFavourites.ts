const EmptyFavourites = () => {

  const listImagesFavourites = document.querySelector<HTMLElement>('#listImagesFavourites')

  const h3 = document.createElement("h3")
  h3.className = "text-center text-lg mt-8 py-6 px-8 mx-auto col-span-full font-semibold rounded border-2 border-dashed border-cyan-500 underline underline-offset-8 sm:text-2xl"
  h3.textContent = "You have not added images to favorites yet"
  
  listImagesFavourites?.append(h3)
}

export { EmptyFavourites }