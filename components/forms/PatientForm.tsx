'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import CustomFormField from "@/components/CustomFormField"
import SubmitButton from "@/components/SubmitButton"
import { UserFormValidation } from "@/app/libs/schemas/validation"
import { createUser } from "@/app/libs/actions/patient.actions"

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datepicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}

const PatientForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    }
  })

  async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true)
    try {
      const userData = { name, email, phone }
      const user = await createUser(userData)
      if ( user ) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log('Error en onSubmit')
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there! 👋</h1>
          <p className="text-dark-700">Schedule your first appointment today.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Jhon Doe"
          iconSrc="assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email address"
          placeholder="jhon.doe@asclepius.com"
          iconSrc="assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(34) 654 32 19 87"
        />
        <SubmitButton 
          isLoading={isLoading}
        >
          Login
        </SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm
