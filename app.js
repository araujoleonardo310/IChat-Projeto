const expres = require('express')
const path = require('path')
const app = expres()
const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => console.log('💬 server on port ${PORT}'))

app.use(express.static(path.join(__dirname, 'public')))