import {ref, reactive} from 'vue'
import useField from './field'

const useForm = (props = {}) => {
  const form = reactive({})

  for(const [key, value] of Object.entries(props)) {
    form[key] = useField(value)
  }

  return form
}

export default useForm