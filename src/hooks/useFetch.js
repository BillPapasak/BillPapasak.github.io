import { useEffect, useState } from "react"
import FetchOperation from "../helpers/fetchOperation"

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [isError, setIsError] = useState(false)

    useEffect(() => {

        const fetchData = async (url) => {
            
            try {

                const data = await new FetchOperation().getResponse(url)
                console.log(data)
                setData(data)
            } catch(error) {

                console.log(error)
                setError(error)
                setIsError(true)
            }finally {

                setIsLoading(false)
            }
           
        }

        fetchData(url)

    }, [url])

    return {

        data,
        setData,
        isLoading, 
        error,
        isError
    }
}