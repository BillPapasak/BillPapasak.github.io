import { useState, useCallback } from "react"

export const useToggle = (initial=false) => {

    const [toggled, setToggled] = useState(initial)

    const show = () => setToggled(true)
    const hide = () => setToggled(false)
    const toggle = useCallback(() => setToggled(toggle => !toggle), [])

    return {
        
        toggled,
        show,
        hide,
        toggle
    }
}