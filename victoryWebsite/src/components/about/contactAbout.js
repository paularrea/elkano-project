import React from "react"
import { useForm } from "react-hook-form"
import styles from "../../styles/about.module.scss"
import FormAboutImg from "./formAboutImg"

const ContactAbout = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div className={styles.contact_container}>
      <div className={styles.flex_container}>
        <div>
          <FormAboutImg />
        </div>
        <div>
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
            <div
              data-sal="slide-up"
              data-sal-delay="250"
              data-sal-duration="1000"
              className={styles.btn_container}
            >
              <button
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-duration="1000"
                type="submit"
              >
                ABSENDEN
              </button>
              <button
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-duration="1000"
                type="submit"
              >
                WIR RUFEN SIE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactAbout
