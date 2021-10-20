



export const getEvent = async (id) =>{
    

     const res = await fetch(`http://192.168.0.13:3001/events/${id}`)

    return  await res.json()
        
}


export const searchTicketiInEvent = async (eventId, qrCod) => {
    // console.log('QR en fucion api => ', qrCod)
    // console.log('event ID en fucion api => ', eventId)
    try {
        const res = await fetch(`http://192.168.0.13:3001/tickets/event?eventId=${eventId}`)

        const lista = await res.json()

        let retorno;

        // let result = 
        lista.map(tickets => {
            if(tickets.id === qrCod) {
                // console.log('Encontrado datos=> ', tickets.id + ' ' + tickets.propietario)
                // console.log(JSON.stringify(tickets))
                retorno = tickets
            }
        })

        if(retorno){
            return retorno
        }
        else {
            return ''
        }


        

        // console.log('RESULT => ', result.createdAt)

    } catch (error) {
        console.log('rompio => ',error)
    }
}


// Object {
//     "createdAt": "2021-10-19T14:37:38.346Z",
//     "event": Object {
//       "address": "Av. Corrientes 857",
//       "artist": "Lit Killah",
//       "availableTickets": 535,
//       "createdAt": "2021-10-19T14:33:44.625Z",
//       "date": "2021-11-13",
//       "id": "d448f18a-acef-4b25-aa29-e91adea38b3e",
//       "image": "https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/lk5960.png",
//       "isImportant": true,
//       "location": "Capital Federal",
//       "name": "Lit Killah",
//       "place": "Teatro Gran Rex",
//       "price": 1500,
//       "province": "Buenos Aires",
//       "time": "22:00",
//       "totalTickets": 540,
//       "updatedAt": "2021-10-20T14:22:10.727Z",
//     },
//     "eventId": "d448f18a-acef-4b25-aa29-e91adea38b3e",
//     "id": "3090a639-0475-4f9d-a385-bf5a6b8d1e2f",
//     "propietario": "kenji Endo",
//     "updatedAt": "2021-10-19T14:37:38.380Z",
//     "user": Object {
//       "createdAt": "2021-10-19T14:33:58.302Z",
//       "email": "kenji.endo.1989@gmail.com",
//       "fullName": "kenji Endo",
//       "googleId": "109896644323039799007",
//       "id": "1c2a247f-903e-4ec2-9216-0e70ecb4c17a",
//       "isAdmin": false,
//       "password": null,
//       "picture": "https://lh3.googleusercontent.com/a-/AOh14GiIYyizs0MzNBRNxgVMpqVJVatEHA4VFHvYgvU=s96-c",
//       "resetPassword": null,
//       "updatedAt": "2021-10-19T14:33:58.302Z",
//     },
//     "userId": "1c2a247f-903e-4ec2-9216-0e70ecb4c17a",
//   }
  