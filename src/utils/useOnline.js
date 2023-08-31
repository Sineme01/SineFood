import { useState, useEffect } from "react"

export const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
        }
        const handleOffline = () => {
            setIsOnline(false)
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        //removing event listeners because if we are going to about page or any other page and then comes 
        //back to home page event listeners are again rendered and hence can blow our app if we re-render body elements more.
        // window.removeEventListener("online",handleOnline);
        // window.removeEventListener("offline",handleOffline);
    }, [])
    return isOnline;
};