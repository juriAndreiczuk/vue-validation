<template>

<form @submit.prevent="submit">
<pre>
  {{form}}
</pre>
  <input 
    :style="{background: form.email.showError ? 'pink' : 'white'}"
    @blur="form.email.blur"
    type="email"
    placeholder="email"
    v-model="form.email.value"
  >
  <div v-if="!form.email.valid && form.email.touched">
    <small v-if="form.email.errors.required">Email is required</small>
    <small v-else-if="form.email.errors.email">Please enter a valid email address</small>
    <small v-else-if="form.email.errors.interval">Pleaseenter email from 3 to 10 letters</small>
  </div>
  <br>
  <input 
    :style="{background: form.password.showError ? 'pink' : 'white'}"
    @blur="form.password.blur"
    type="password"
    placeholder="password"
    v-model="form.password.value"
  >
  <div v-if="!form.password.valid && form.password.touched">
    <small v-if="form.password.errors.required">Password is required</small>
    <small v-else-if="form.password.errors.minLength">Password length can't be less then 8</small>
    <small v-else-if="form.password.errors.password">Password must contain at least one uppercase letter</small>
  </div>
  <br>
  <button :disabled="!form.valid" type="submit">Submit</button>
</form>
</template>

<script>
import useForm from './use/form'
import useValidators from './use/validators'

export default {
  setup() {
    const {required, email, minLength, password, interval} = useValidators()
    const form = useForm({
      email: {
        value: '',
        validators: {required, email, interval: interval(3, 10)}
      },
      password: {
        value: '',
        validators: {required, minLength: minLength(8), password}
      }
    })
    const submit = () => {}

    return { form, submit } 
  }
 }
</script>

