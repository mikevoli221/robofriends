export const callAPI = (link) => (  
    fetch(link).then(response => response.json())
)
  
