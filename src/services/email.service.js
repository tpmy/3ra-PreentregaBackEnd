const adminEmail = 'tomitoboulanger@gmail.com'

class EmailService {
  enviarMail({ datos }) {
    return new Promise((resolve, reject) => {
      console.log(`mail a: ${adminEmail}`)
      resolve(true)
    })
  }
}

export const emailService = new EmailService()