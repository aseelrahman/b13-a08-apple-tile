"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ----- SignIn -----

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: false,
      callbackURL: "/",
    });
    console.log({ data, error });

    // const formData = new FormData(e.currentTarget);
    // const data = {};
    // // Convert FormData to plain object
    // formData.forEach((value, key) => {
    //   data[key] = value.toString();
    // });
    // console.log(data, "Form data");

    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center  text-white">
        <Form
          className="flex w-96 flex-col gap-4 border border-blue-500 rounded-2xl p-5"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-white">Email</Label>
            <Input
              placeholder="john@example.com"
              className={`bg-mist-900 text-white`}
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <Input
              placeholder="Enter your password"
              className={`bg-mist-900 text-white`}
            />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <small>
            Don&apos;t have an account?{" "}
            <Link href={`/signup`} className="text-blue-500">
              Register Here
            </Link>
          </small>
          <div className="flex gap-2 w-full">
            <Button type="reset" variant="secondary" className={`w-1/2`}>
              Reset
            </Button>
            <Button type="submit" className={`w-1/2`}>
              <Check />
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
