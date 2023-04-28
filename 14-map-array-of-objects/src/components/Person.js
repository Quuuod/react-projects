function Person({ firstName, lastName, email, img }) {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <h1>
        {firstName} {lastName}
      </h1>
      <h3>{email}</h3>
    </div>
  )
}

export default Person
