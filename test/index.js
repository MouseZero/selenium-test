const mocha = require('mocha')
const { expect } = require('chai')
const { remote } = require('webdriverio')
const standalone = require('selenium-standalone')

let selenium
let browser

before(done => {
  standalone.start(async (err, _selenium) => {
    if (err) return done(err)
    selenium = _selenium
    browser = remote({
      desiredCapabilities: {
        browserName: 'chrome'
      }
    })
    await browser.init()
    done()
  })
})

after(async () => {
  browser && await browser.end()
  selenium && selenium.kill()
})

describe('loading Google', () => {

  it('redirects to www subdomain', async () => {
    await browser.url('https://google.com')
    const url = await browser.getUrl()
    expect(url).to.equal('https://www.google.com/')
  })

})
