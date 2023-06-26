import { useState } from 'react'

const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [errors, setErros] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const err = onValidate(form)
    setErros(err)

  }

  return { form, errors, loading, handleChange, handleSubmit }
}

export default useForm;