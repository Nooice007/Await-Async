
// () => console.log('Hi') -- is called the "CALL BACK"
setTimeout(() => console.log('Hi'), 2000)
setTimeout(() => console.log('there!'), 2000)
setTimeout(() => console.log('How'), 2000)
setTimeout(() => console.log('are'), 2000)
setTimeout(() => console.log('you?'), 2000)

// Callback HELL
setTimeout(() => {
    console.log('Hi')
    setTimeout(() => {
        console.log('there!')
        setTimeout(() => {
            console.log('How')
            setTimeout(() => {
                console.log('are')
                setTimeout(() => {
                    console.log('you?')
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)

