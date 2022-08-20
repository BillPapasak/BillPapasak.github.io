import { useRef, useEffect } from "react"

export const useOffMountEffect = ({ callback=() => null, dependencies=[], cleanupFunc=() => null }) => {

    const ref = useRef(false)
    
    useEffect(() => {
 
        if (ref.current) {
            callback()
        }

        return () => cleanupFunc()
        
    }, dependencies)

    return {

        ref
    }
}