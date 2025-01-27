/**
 * A hook to control the "setInterval" timer built into JavaScript.
 *
 * Inspired by: https://usehooks-ts.com/react-hook/use-interval
 */
import {useEffect} from "react";

/**
 *
 * @param callback The function to execute each interval
 * @param delay in milliseconds. Default: 1000
 */
export default function useInterval(callback: () => void, delay: number = 1000) {
    useEffect(() => {
        const id = setInterval(callback, delay);
        return () => clearInterval(id);
    }, [delay]);
}
