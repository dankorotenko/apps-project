import { useEffect, useState } from 'react';

const useCountdown = () => {
    const newYears = '1 Jan 2022';
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);
    const [isPending, setIsPending] = useState(true);
    

        useEffect(() => {
            const abortCont = new AbortController();
            setInterval(() => {
                
                const newYearsDate = new Date(newYears);
                const currentDate = new Date();
                const totalSeconds = (newYearsDate - currentDate) / 1000;
                setDays(Math.floor(totalSeconds / 3600 / 24));
                setHours(Math.floor(totalSeconds / 3600) % 24);
                setMinutes(Math.floor(totalSeconds / 60) % 60);
                setSeconds(Math.floor(totalSeconds) % 60);
                setIsPending(false);
                
            }, 1000);

            return () => abortCont.abort()
        }, [])


        return {seconds, minutes, hours, days, isPending};
}
 
export default useCountdown;