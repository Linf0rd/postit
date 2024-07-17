import { z } from "zod"

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "⚠ Name is too short." }),
  username: z.string().min(2, { message: "⚠ Username is too short." }),
  email: z.string().email({ message: "⚠ Invalid email." }),
  password: z.string().min(8, { message: "⚠ Password must be atleast 8 characters." }),
})

export const SignInValidation = z.object({
  email: z.string().email({ message: "⚠ Invalid email." }),
  password: z.string().min(8, { message: "⚠ Password must be atleast 8 characters." }),
})