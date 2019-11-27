const getListings = () => {
    return fetch("/listings")
    .then((response)=>{
        if(response.status === 200){
            return response.json()
        }else{
            return new Promise(()=>{
                resolve({error: 'There was an error.'})
            })
        }
    })
}
export {
    getListings
}