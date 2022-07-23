<template>

<form @submit.prevent="submit">
<pre>
  {{form}}
</pre>
  <input 
    :style="{ 
      background: form.email.valid || !form.email.touched ? 'white' : 'pink' 
    }"
    @blur="form.email.touched = true"
    type="email"
    placeholder="email"
    v-model="form.email.value"
  >
  <div v-if="!form.email.valid && form.email.touched">
    <small v-if="form.email.errors.required">Email is required</small><br>
  </div>
  <br>
  <input 
    :style="{ 
      background: form.password.valid || !form.password.touched ? 'white' : 'pink' 
    }"
    @blur="form.password.touched = true"
    type="password"
    placeholder="password"
    v-model="form.password.value"
  >
  <div v-if="!form.password.valid && form.password.touched">
    <small v-if="form.password.errors.required">Password is required</small>
    <small v-else-if="form.password.errors.minLength">Password length can't be less then 8</small>
  </div>
  <br>
  <button :disabled="!form.valid" type="submit">Submit</button>
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
        value: '',
        validators: {required}
      },
      password: {
        value: '',
        validators: {required, minLength: minLength(8)}
      }
    })
    const submit = () => {}

    return { form, submit } 
  }
 }
</script>

