const app = require('./app')

async function main(){
    const PORT = process.env.PORT || 4001

    await app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})
}

main()