import useCountdown from './useCountdown';

const Timer = ({title}) => {

    
    
    const {seconds, minutes, hours, days, isPending} = useCountdown();
    return ( 
        <div className="timer">
            <h1>{title}</h1>
            <h2>New Years Eve</h2>
            {isPending && <div className="loading">loading...</div>}
            
            { !isPending && <div className="countdown-container">
                <div className="countdown-el days-c">
                    <p className="big-text" id="days">{days}</p>
                    <span>days</span>
                </div>
                <div className="countdown-el hours-c">
                    <p className="big-text" id="hours">{hours}</p>
                    <span>hours</span>
                </div>
                <div className="countdown-el mins-c">
                    <p className="big-text" id="mins">{minutes}</p>
                    <span>mins</span>
                </div>
                <div className="countdown-el seconds-c">
                    <p className="big-text" id="seconds">{seconds}</p>
                    <span>seconds</span>
                </div>
            </div>}
        </div>
     );
}
 
export default Timer;