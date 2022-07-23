import {reactive, ref, watch} from 'vue'

const useField = (field) => {
  const valid = ref(true)
  const value = ref(field.value)
  const errors = reactive({})
  const touched =  ref(false)

  const checkErrors = () => {
    valid.value = true
    Object.keys(field.validators ?? {}).forEach(key => {
      const currentValid = field.validators[key](value.value)
      errors[key] = !currentValid 
      if (!currentValid) {
        valid.value = false
      }
    })
  }

  checkErrors()
  watch(value, checkErrors)

  return {value, valid, errors, touched}
}

export default useField