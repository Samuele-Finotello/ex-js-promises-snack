function lanciaDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stuck = Math.floor(Math.random() * 5)

      if (stuck !== 0) {
        const num = Math.floor(Math.random() * 6) + 1;
        resolve(`Il numero uscito e': ${num}`)
      }
      else {
        reject("Il dado si e' incastrato. Riprova.")
      }
    }, 3000)
  })
}

lanciaDado()
  .then(num => console.log(num))
  .catch(messaggio => console.error(messaggio))

function creaLanciaDado() {
  let ultimoLancio = null;

  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const stuck = Math.floor(Math.random() * 5)

        if (stuck !== 0) {
          const num = Math.floor(Math.random() * 6) + 1;
          if (num === ultimoLancio) {
            console.log('Incredibile!')
          }
          ultimoLancio = num;
          resolve(`Il numero uscito e': ${num}`)
        }
        else {
          ultimoLancio = null;
          reject("Il dado si e' incastrato. Riprova.")
        }
      }, 3000)
    })
  }
}

const lancioDadi = creaLanciaDado()

lancioDadi()
  .then(num => {
    console.log(num)
    lancioDadi()
      .then(num => console.log(num))
      .catch(messaggio => console.error(messaggio))
  })
  .catch(messaggio => console.error(messaggio))