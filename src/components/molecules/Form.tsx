import { FC, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"
import { colors, shadows, device } from "../../styles"

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: 95%;
  z-index: 99;
  margin-top: 4rem;

  @media ${ device.Tablet } {
    width: 40%;
  }
`

const InputStyled = styled.input`
  width: 90%;
  height: 50px;
  background: linear-gradient(107deg, rgba(15, 17, 18, 0.63) 0%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 3.5px 3.5px 19px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.9px);
  border-radius: 50px;
  border: none;
  font-family: 'Neue Machina';
  font-size: 1.3rem;
  padding-left: 1rem;
  text-shadow: ${ shadows.xs };
  color: ${ colors.secondary };

  &::placeholder {
    color: ${ colors.secondary};
    opacity: .3;
  }

  &:focus {
    outline: 1px solid ${ colors.secondary };
    background: linear-gradient(107deg, rgba(15, 17, 18, 0.8) 0%, rgba(60, 60, 60, 0.8) 100%);
  }
`

const TextAreaStyled = styled.textarea`
  width: 90%;
  height: 50px;
  background: linear-gradient(107deg, rgba(15, 17, 18, 0.63) 0%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 3.5px 3.5px 19px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.9px);
  border-radius: 50px;
  border: none;
  font-size: 1.3rem;
  font-size: 1.3rem;
  padding-left: 1rem;
  padding-top: .8rem;
  color: ${ colors.secondary };
  text-shadow: ${ shadows.xs };

  &::placeholder {
    color: ${ colors.secondary};
    opacity: .3;
  }

  &:focus {
    outline: 1px solid ${ colors.secondary };
    background: linear-gradient(107deg, rgba(15, 17, 18, 0.8) 0%, rgba(60, 60, 60, 0.8) 100%);
  }
`

const ButtonStyled = styled.button`
  z-index: 99;
  width: 90%;
  height: 50px;
  background: linear-gradient(107deg, rgba(143, 140, 244, 0.741) 0%, rgba(164, 161, 254, 0.822) 100%);
  box-shadow: 3.5px 3.5px 19px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.9110169410705566px);
  border-radius: 50px;
  border: none;
  font-family: 'Neue Machina';
  font-size: 1.3rem;
  text-shadow: ${ shadows.xs };
  color: ${ colors.black.black3 };
  cursor: pointer;
`



export const Form: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_066l43c",
        "template_ck20cnn",
        formRef.current as HTMLFormElement,
        "MuNUXTRejQzuBKNQD"
      )
      .then(
        () => {
          setSuccess(true)
        },
        () => {
          setError(true)
        }
      )
  }

  return (
    <FormStyled
      ref={formRef}
      onSubmit={sendEmail}
    >
      <InputStyled type="text" required placeholder="Name" name="name"/>
      <InputStyled type="email" required placeholder="Email" name="email"/>
      <TextAreaStyled placeholder="Message" name="message"/>
      <ButtonStyled>Submit</ButtonStyled>
      {error && "Error"}
      {success && "Success"}
    </FormStyled>
  )
}
