import {
  MicrophoneIcon,
  SearchIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import { useRef } from "react"
import HeaderOptions from "./HeaderOptions"

const Header = () => {
  const router = useRouter()
  const searchInput = useRef()

  const handleSearch = (e) => {
    e.preventDefault()

    const term = searchInput.current.value

    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="w-full flex items-center p-6 ">
        <Image
          src={
            "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow items-center px-6 py-3 ml-10 mr-5 border border-gray-100 max-w-3xl rounded-full shadow-lg">
          <input
            className="w-full focus:outline-none  flex-grow"
            ref={searchInput}
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 transition duration-100 cursor-pointer transform hover:scale-125 text-gray-500"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex  border-l-2 border-gray-300 pl-4 text-blue-500" />
          <SearchIcon
            onClick={handleSearch}
            className="h-6 cursor-pointer hidden sm:inline-flex text-blue-500"
          />
          <button hidden type="submit" onClick={handleSearch}>
            Search
          </button>
        </form>
        <UserCircleIcon className="text-indigo-700 transition duration-150 transform hover:scale-125 cursor-pointer h-10 ml-auto" />
      </div>
      <HeaderOptions />
    </header>
  )
}

export default Header
