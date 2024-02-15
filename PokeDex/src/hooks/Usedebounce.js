function useDebounce (cd,delay =2000){
  let timerId;
  
    return (...args)=>{
        clearTimeout(timerId); 
        timerId=setTimeout(()=>{
            cd(...args)
        },delay)
      }
    }
    
    export default useDebounce