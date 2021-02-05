import React from "react"
import styles from "./form.module.scss"
import { useForm } from "react-hook-form"

const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <>
      <div id="contact" className={styles.container}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h3>
            Registrieren Sie sich für weitere Informationen über unsere
            Preislisten
          </h3>
          <h5>
            Wir werden Ihre Anfrage bearbeiten und so schnell wie möglich
            kontaktieren wir Sie
          </h5>
        </div>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={styles.input}
            name="name"
            placeholder="Name"
            ref={register({ required: true })}
          />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={styles.input}
            name="vorname"
            placeholder="Vorname"
            ref={register({ required: true })}
          />
          <input
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="1000"
            className={styles.input}
            name="unternehmen"
            placeholder="Unternehmen"
            ref={register({ required: true })}
          />

          <input
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="1000"
            className={styles.input}
            name="industrie"
            placeholder="Industrie"
          />

          <input
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            className={styles.input}
            name="telefon"
            type="number"
            placeholder="Telefon"
            ref={register({ min: 18, max: 99 })}
          />

          <input
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            className={styles.input}
            name="e-mail"
            placeholder="E-mail"
            ref={register({ required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <button
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-duration="1000"
            type="submit"
          >
            SEND FORM
          </button>
        </form>
        <hr className={styles.hr} />
      </div>
    </>
  )
}

export default ContactForm
