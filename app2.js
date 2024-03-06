
//const p = new Promise

const log = message => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(message)
            resolve()
        }, 1000)
    })
    return promise
}

log('hi')
    .then(() => log('there'))
    .then(() => log('hows'))
    .then(() => log('it'))
    .then(() => log('going'))












