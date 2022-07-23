<template>

<form @submit.prevent="submit">
<pre>
  {{form}}
</pre>
  <input 
    type="email"
    placeholder="email"
    v-model="form.email.value"
  >
  <input 
    type="password"
    placeholder="password"
    v-model="form.password.value"
  >
  <button type="submit">Submit</button>
</form>
</template>

<script>
import useForm from './use/form'

const required = val => !!val
const minLength = len => val => val.length >= len

export default {
  setup() {
    const form = useForm({
      email: {
        value: 'myemail@mail.com',
        validators: {required}
      },
      password: {
        value: 'mypass',
        validators: {required, minLength: minLength(8)}
      }
    })
    console.log(form)
    const submit = () => {}

    return { form, submit } 
  }
 }
</script>

