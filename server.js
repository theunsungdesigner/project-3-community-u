
const express = require('express')
const app = express()


const { eventRouter } = require('./controllers/event.js')
const { donationRouter }= require('./controllers/donation.js')
const { volunteersRouter }= require('./controllers/volunteers.js')



app.use(express.urlencoded({extended: true}))


app.use(express.json())


app.use(express.static(`${__dirname}/client/build`))



app.use('/api/event', eventRouter)

//sets second api or model to pull in from controller
app.use('/api/donation', donationRouter)

app.use('/api/volunteers', volunteersRouter)


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
