const mocha = require('mocha')
const standalone = require('selenium-standalone')

const listening = (app, port) =>
new Promise((resolve, reject) => {
  const server = app.listen(port, err => {
    if (err) reject(err)
    else resolve(server)
  })
})

const serve = () => new Promise((resolve, reject) => {
standalone.start((err, server) => {
  if (err) return reject(err)
  resolve(server)
})
})

describe('first test', () => {
    it('should do something', () => {
    })
})