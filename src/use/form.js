import {computed, reactive} from 'vue'
import useField from './field'

const useForm = (props = {}) => {
  const form = reactive({})

  for(const [key, value] of Object.entries(props)) {
    form[key] = useField(value)
  }
  
  form.valid = computed(() =>  Object.keys(form)
      .filter(key => key !== 'valid')
      .every((key) =>  form[key].valid)
  )

  return form
}

export default useForm