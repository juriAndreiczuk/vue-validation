const useValidators = () => {
  const required = val => !!val

  const minLength = len => val => val.length >= len

  const email = val => val.includes('@') && val.includes('.')

  const password = val => {
    const uppercaseLetters = new RegExp("[A-Z]", 'g')
    return !!val.match(uppercaseLetters)
  }

  const interval = (from, to) => val => val.length > from && val.length < to

  return {
    required,
    minLength,
    email,
    password,
    interval
  }
}

export default useValidators