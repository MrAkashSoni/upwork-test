import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface Credentials {
  email: string;
  password: string;
}

interface ErrorText {
  email?: string;
  password?: string;
}

interface ModalProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void
}



const Modal: React.FC<ModalProps> = ({ open, onOpenChange }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [errorText, setErrorText] = useState({})

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
  }

  const handleValidation = (): { error: ErrorText; isError: boolean } => {
    let error: ErrorText = {};
    let isError = false

    if (!email) {
      error.email = "Email is required"
      isError = true
    }
    if (!password) {
      error.password = "Password is required"
      isError = true
    }
    setErrorText(error)
    return {
      error,
      isError
    }
  }

  const handleSubmit = (): void => {
    console.log("errortext :", errorText);

    const validate = handleValidation()
    if (!validate?.isError) {
      localStorage.setItem("user", JSON.stringify(credentials))
      onOpenChange(false)
    }
  }

  const handleCloseModal = (): void => {
    onOpenChange(false)
    setCredentials({ email: "", password: "" })
    setErrorText({})
  }

  const { email, password } = credentials
  return (
    <>
      <Dialog open={open} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>

          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-3">
              <Label htmlFor="email" className="text-left">
                Email
              </Label>
              <Input name="email" value={email} className="col-span-3" onChange={handleChange} helperText={errorText?.email} />
            </div>
            <div className="grid grid-cols-2 items-center gap-3">
              <Label htmlFor="password" className="text-left">
                Password
              </Label>
              <Input name="password" type="password" value={password} className="col-span-3" onChange={handleChange} helperText={errorText?.password} />
            </div>
          </div>
          <div className="grid grid-cols-1 items-center">
            <Button onClick={handleSubmit} className="mb-5">Login</Button>
            <Button onClick={handleSubmit} className={buttonVariants({ variant: "outline" })}>
              <Image
                alt="Google"
                src={"/google.png"}
                height={30}
                width={30}
              />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Modal