



export const getEvent = async (id) =>{
    // const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

    console.log('en api 1 => ', id)
    // const res = await fetch(`http://localhost:3001/events/${id}`)
    // console.log(baseUrl + `:3001/events/${id}`)
    // const res = await fetch(`http://10.1.2.2:3001/events/${id}`)
     const res = await fetch(`http://192.168.0.13:3001/events/${id}`)
    // console.log('en api 2 => ', res.json())
    return  await res.json()
        
}