import { postUploadPhoto } from "../apis/postUploadPhoto";

const ModalUpload = () => {
  const body = document.querySelector('body');
  const main = document.querySelector('main');

  const input = document.createElement("input")
  input.className = "absolute inset-0 w-full h-full opacity-0"
  input.setAttribute("id", "file")
  input.setAttribute("type", "file")
  input.setAttribute("name", "file")

  const inputMessage = document.createElement("p")
  inputMessage.className = "text-center font-bold text-white pointer"
  inputMessage.textContent = "Select the image"

  const inputBox = document.createElement("div")
  inputBox.className = "relative p-2.5 mx-auto w-40 rounded opacity-80 bg-black border-4 border-blue-700 border-dashed pointer hover:bg-blue-300"
  inputBox.append(inputMessage, input)

  const button = document.createElement("button")
  button.setAttribute("type", "button")
  button.textContent = "Upload a photo of a dog"
  button.className = "bg-blue-700 text-white rounded pointer mx-auto mt-4 py-2 px-4 block"
  button.onclick = () => {
    postUploadPhoto()
    const bgShadow = document.querySelector("#bgShadow")
    bgShadow!.classList.toggle("hidden")
  }
  
  const form = document.createElement("form")
  form.setAttribute("id", "uploadingForm")

  form.append(inputBox, button)
  
  const closeButton = document.createElement("button")
  closeButton.className = "text-white font-bold mt-3 px-3 py-2 bg-red-600 rounded hover:bg-red-500"
  closeButton.textContent = "Close"
  closeButton.onclick = () => toggleModal()

  const container = document.createElement("section")
  container.className = "p-7 bg-slate-200 border-blue-700 border-4 rounded"
  container.append(form, closeButton)
  
  const shadow = document.createElement("section")
  shadow.setAttribute("id", "bgShadow")
  shadow.className = "w-full h-full fixed top-0 left-0 hidden flex justify-center items-center"
  

  shadow.append(container)

  body?.insertBefore(shadow, main!.nextSibling)
}

function toggleModal() {
  const bgShadow = document.querySelector("#bgShadow")
  bgShadow!.classList.toggle("hidden")
}
export { ModalUpload }