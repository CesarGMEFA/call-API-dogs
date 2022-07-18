type Typed =  string | number | boolean;

const DogCardFavourites = (data: Typed[], callback: Function) => {

  const listImagesFavourites = document.querySelector<HTMLElement>('#listImagesFavourites')

  data.map((fact: any) =>{


    const buttonFavourite = document.createElement("button")
    buttonFavourite.setAttribute("type", "button")
    buttonFavourite.className = "bg-red-700 mx-auto mt-4 py-2 px-4 text-white font-medium rounded cursor-pointer hover:bg-red-500"
    buttonFavourite.textContent = "Delete favorite image"
    buttonFavourite.onclick = () => callback(fact.id)

    const divInfo = document.createElement("div")
    divInfo.className = "mt-4 flex flex-col"
    divInfo.append(buttonFavourite)

    const image = document.createElement("img")
    image.src = fact.image.url
    image.setAttribute("alt", "Dog photo")
    image.className = "w-full h-full object-center object-cover lg:w-full lg:h-full"

    const divImg = document.createElement("div")
    divImg.className = "w-[18,75rem] h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
    divImg.append(image)

    const divCard = document.createElement("article")
    divCard.className = "group relative"
    divCard.setAttribute("id", `${fact.id}`)
    divCard.append(divImg, divInfo)

    listImagesFavourites?.append(divCard)
  })
}

export { DogCardFavourites }