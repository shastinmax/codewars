console.log('Request data...')

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Preparing data...')
        const backend={
            server:'asw',
            port:2000,
            status:'working'
        }
        resolve(backend)
    },2000)
})
p.then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.modified=true
            resolve(data)
        },2000)
    })
}).then(clientData=>{
    console.log('Data received',clientData)
})