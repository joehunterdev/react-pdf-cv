import { useState, useCallback } from "react";
/*
  two states load and error
  custom hook takes no params
  uses callback for request (config,applyData) 
  return 3 state elements, 3rd being an 
*/
const useHttp = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Generic Send Handler
  const sendRequest = useCallback(async (requestConfig, applyData) => {

    setIsLoading(true)
    setError(null)

    try {

       const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ?  JSON.stringify(requestConfig.body) : null

      })

      if (!response.ok) {

        throw new Error("No response")

      }

      const data = await response.json();

      if (!data) {

        throw new Error("No data")

      }

      setIsLoading(false)
      applyData(data) //is returned for fetchTask ?

    } catch (err) {

      setError(err.message || "Something went wrong !")
      setError(null)

    }



  }, []);

  return { isLoading, error, sendRequest };
}


export default useHttp

