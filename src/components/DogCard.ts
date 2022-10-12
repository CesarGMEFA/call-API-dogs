type Typed =  string | number | boolean;

const DogCard = (data: Typed[], callback: Function) => {

  const listImagesRandom = document.querySelector<HTMLElement>('#listImagesRandom')

  data.map((fact: any) =>{
    
    let breedData = undefined;
    if (fact.breeds) {
      breedData = fact.breeds[0]
    }

    let breedName = ''
    let bredForInfo = ''

    if (breedData != undefined) {
      breedName = breedData.name
      bredForInfo = breedData.bred_for
    } else {
      breedName = 'There is no data for this dog'
      bredForInfo = 'There is no data for this dog'
    }

    const titleH3 = document.createElement("h3")
    titleH3.className = "text-sm text-gray-700"
    titleH3.textContent = `Breed name: ${breedName}`
    
    const bredFor = document.createElement("p")
    bredFor.className = "mt-1 text-sm text-gray-500"
    bredFor.textContent = `Bred for: ${bredForInfo}`

    const buttonFavourite = document.createElement("button")
    buttonFavourite.setAttribute("type", "button")
    buttonFavourite.className = "bg-blue-700 mx-auto mt-4 py-2 px-4 text-white font-medium rounded cursor-pointer hover:bg-blue-500"
    buttonFavourite.textContent = "add to favourite"
    buttonFavourite.onclick = () => callback(fact.id)

    const divInfo = document.createElement("div")
    divInfo.className = "mt-4 flex flex-col"
    divInfo.append(titleH3, bredFor, buttonFavourite)

    const image = document.createElement("img")
    image.src = fact.url
    image.setAttribute("alt", "Dog photo")
    image.className = "w-full h-full object-center object-cover lg:w-full lg:h-full"

    const divImg = document.createElement("div")
    divImg.className = "w-[18,75rem] h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
    divImg.append(image)

    const divCard = document.createElement("article")
    divCard.className = "group relative"
    divCard.append(divImg, divInfo)

    listImagesRandom?.append(divCard)
  })
}

export { DogCard }