import {reactive, ref, watch} from 'vue'

const useField = (field) => {
  const valid = ref(true)
  const value = ref(field.value)
  const errors = reactive({})

  const checkErrors = () => {
    Object.keys(field.validators ?? {}).forEach(key => {
      const currentValid = field.validators[key](value.value)
      errors[key] = !currentValid 
    })
  }

  checkErrors()
  watch(value, checkErrors)

  return {value, valid, errors}
}

export default useField