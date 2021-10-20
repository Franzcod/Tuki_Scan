



export const getEvent = async (id) =>{
    const res = await fetch(`http://10.0.2.2:3001/events/${id}`)
        return  await res.json()
        
}