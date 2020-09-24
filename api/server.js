const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authmw = require('../data/authentication/auth-mw.js');
const welcomeRouter = require('../gsPanel/welcome')
const eventRouter = require('../data/event-reports/event-router')
const authRouter = require('../data/authentication/auth-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api', welcomeRouter)
server.use('/api/auth/', authRouter)
server.use('/api/eventreport', authmw.loginValid('normal'), eventRouter)

module.exports = server

