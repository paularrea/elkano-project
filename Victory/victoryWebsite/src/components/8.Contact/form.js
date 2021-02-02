import React from "react"
import styles from "./form.module.scss"
import { useForm } from "react-hook-form"

const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <>
      <div className={styles.container}>
        <h3>
          Registrieren Sie sich für weitere Informationen über unsere
          Preislisten
        </h3>
        <h5>
          Wir werden Ihre Anfrage bearbeiten und so schnell wie möglich
          kontaktieren wir Sie
        </h5>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className={styles.input}
            name="name"
            placeholder="Name"
            ref={register({ required: true })}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className={styles.input}
            name="vorname"
            placeholder="Vorname"
            ref={register({ required: true })}
          />

          <input
            className={styles.input}
            name="unternehmen"
            placeholder="Unternehmen"
            ref={register({ required: true })}
          />

          <input
            className={styles.input}
            name="industrie"
            placeholder="Industrie"
          />

          <input
            className={styles.input}
            name="telefon"
            type="number"
            placeholder="Telefon"
            ref={register({ min: 18, max: 99 })}
          />

          <input
            className={styles.input}
            name="e-mail"
            placeholder="E-mail"
            ref={register({ required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <button type="submit">SEND FORM</button>
        </form>
        <hr className={styles.hr}/>
      </div>
    </>
  )
}

export default ContactForm
