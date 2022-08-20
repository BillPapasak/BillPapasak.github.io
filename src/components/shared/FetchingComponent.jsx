import { useFetch } from "../../hooks/useFetch"


const FetchingComponent = ({ children, url }) => {

    const { data, isLoading, isError, error } = useFetch(url)

    if (isLoading) return <div> Loading...</div>
    if (isError) return <div> { error } </div>
    return (
        
        children[1](data) 
    )

}

export default FetchingComponent