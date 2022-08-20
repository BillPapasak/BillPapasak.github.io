import { useEffect, useState, useRef } from "react"

export const useHumanDate = ( dateString=new Date(), 
                            timeString=null, 
                            locales=["en-US", "el"],
                            dateOptions={dateStyle:"short"}, 
                            timeOptions={timeStyle:"short"}) => {

    
     const dateFormat = useRef(new Intl.DateTimeFormat(locales,dateOptions))
     const timeFormat = useRef(new Intl.DateTimeFormat(locales,timeOptions))
    // const [date, setDate] = useState(dateFormat.current.format(dateString))
    // const [time, setTime] = useState(timeFormat.current.format(timeString))

    // const changeDate = (newDate) => setDate(dateFormat.current.format(newDate))
    // const changeTime = (newTime) => {
    //     console.log(newTime)
    //     setTime(timeFormat.current.format(newTime))
    // }

    const date = (newDate) => dateFormat.current.format(newDate)
    const time = (newTime) => timeFormat.current.format(newTime)
    
    return {
        
         date, 
         time,
        // changeDate,
        // changeTime,

    }

}