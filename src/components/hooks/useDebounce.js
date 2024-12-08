function useDebounce(cd, delay = 2000) {
    let timerid;
    return (...args) => {
        console.log(...args);
        clearTimeout(timerid);
        timerid = setTimeout(() => {
            cd(...args);
        }, delay)
    }
}

export default useDebounce;