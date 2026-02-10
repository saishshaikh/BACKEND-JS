const handleSubmit = async (e) => {
  e.preventDefault()

  if (formData.Password !== formData.ConfirmPassword) {
    alert("Passwords do not match")
    return
  }

  try {
    const res = await axios.post(
      ServerUrl + "/api/signup",
      {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        UserName: formData.UserName,
        Email: formData.Email,
        Password: formData.Password,
      },
      { withCredentials: true }
    )

    console.log("Signup Success:", res.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}
