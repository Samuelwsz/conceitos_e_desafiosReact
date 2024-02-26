import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import Suggestions from "./Sugestions"

interface User {
  firstName: string
}

export function SearchAutocomplete() {
  const [loading, setLoading] = useState<boolean>(false)
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<unknown | null>(null)
  const [searchParam, setSearchParam] = useState<string>("")
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [filteredUsers, setFilteredUsers] = useState<string[]>([])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase()
    setSearchParam(query)
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : []
      setFilteredUsers(filteredData)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  function handleClick(event: MouseEvent<HTMLLIElement>) {
    setShowDropdown(false)
    setSearchParam(event.currentTarget.innerText)
    setFilteredUsers([])
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true)
      const response = await fetch("https://dummyjson.com/users")
      const data: { users: User[] } = await response.json()

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName))
        setLoading(false)
        setError(null)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      setError(error)
    }
  }

  useEffect(() => {
    fetchListOfUsers()
  }, [])

  console.log(users, filteredUsers, error)

  return (
    <div className="bg-slate-800 h-screen text-center pt-3">
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
          className="text-black "
        />
      )}

      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  )
}
