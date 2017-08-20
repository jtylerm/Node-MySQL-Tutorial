const CreateContact = document.querySelector('.createContact')

CreateContact.addEventListener('submit', (e) => {
    e.preventDefault()
    const firstName = CreateContact.querySelector('.firstName').value
    const lastName = CreateContact.querySelector('.lastName').value
    const email = CreateContact.querySelector('.email').value
    post('/create-contact', { firstName, lastName, email })
})

function post (path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}