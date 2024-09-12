"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";


const SearchBar = () => {

  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string;
    if(name){
      router.push(`/list?name=${name}`)
    }
  }
  return (
    <form className="relative hidden md:block" onSubmit={handleSearch}>
        <button className="absolute cursor-pointer inset-y-0 start-0 flex items-center ps-3">
            <Image src='/search.png' alt="search" width={16} height={16} />
        </button>
        <input type="text" name="name" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </form>
  )
}

export default SearchBar