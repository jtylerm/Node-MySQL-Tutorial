module.exports = {
    createContact ({ firstName, lastName, email }) {
        console.log(`Add contact ${firstName} ${lastName} ${email}`)
        return Promise.resolve()
    }
}