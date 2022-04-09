const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRED_API_KEY)

const sendWelcomEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'midojooba@gmail.com',
        subject: 'Welcome',
        text: `Welcome to our app, ${name}`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'midojooba@gmail.com',
        subject: 'Bye',
        text: `Why did u leave us, ${name} ?`
    })
}

module.exports = {
    sendWelcomEmail,
    sendCancelEmail
}