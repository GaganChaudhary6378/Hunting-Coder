import React from "react";
import styles from "../styles/contact.module.css";

export default function () {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [desc, setDesc] = React.useState("");

  function handleClick(e) {
    e.preventDefault();
    const data = {name,phone,desc,email};

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thanks for contacting us!!")
        setName('')
        setEmail('')
        setPhone('')
        setDesc('')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleChange(e) {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.head1}>Contact Us</h1>
      <form className={styles.formContainer}>
        <div class={styles.formGroup}>
          <label for="name">Enter your name</label>
          <input
            type="email"
            value={name}
            onChange={handleChange}
            class="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>
        <div class={styles.formGroup}>
          <label for="email">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            class="form-control"
            id="email"
            name="email"
            placeholder="Email Address"
            />
        </div>
        <div class={styles.formGroup}>
          <label class="form-check-label" for="exampleCheck1">
            Enter your phone number
          </label>
          <input
            type="number"
            onChange={handleChange}
            value={phone}
            name="phone"
            class="form-check-input"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
        <div class={styles.formGroup}>
          <label for="desc">Desc.</label>
          <input
            type="text"
            value={desc}
            onChange={handleChange}
            class="form-control"
            id="desc"
            name="desc"
            placeholder="Description"
          />
        </div>
        <button type="submit" onClick={handleClick} className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
}
