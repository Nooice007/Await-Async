// IIFE -- Immediately Invoked Function Expression

// await log('hi') // does not work

// (() => {
//     console.log('hi')
// })()

const { rejects } = require('assert')
const https = require('https')
const { resolve } = require('path')

const getDataFromUrl = async (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            let body = ''
            response.on('data', data => body += data.toString())
            response.on('end', () => resolve(JSON.parse(body)))
            response.on('error', reject)
        })
    })
}

(async () => {

    const url = 'https://swapi.dev/api/people/3'
    const swData = await getDataFromUrl(url)
    console.log(swData)

})()






















