import { Router } from "next/router"
import { useState } from "react"

const useLoading = () => {
  const [IsLoading, setIsLoading] = useState(false)

  Router.events.on("routeChangeStart", () => setIsLoading(true))
  Router.events.on("routeChangeComplete", () => setIsLoading(false))
  Router.events.on("routeChangeError", () => setIsLoading(false))

  return IsLoading
}

export default useLoading
