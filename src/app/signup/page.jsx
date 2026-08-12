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
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
    if (!error) {
      router.push("/");
    }
    console.log({ data, error });
  };

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center text-white px-4">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/2 p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-white">
              Create account
            </h1>
            <p className="mt-1 text-sm text-white/50">
              Enter your details to get started
            </p>
          </div>

          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label className="text-sm text-white/70">Name</Label>
              <Input
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#2F6FFF]"
              />
              <FieldError className="text-xs text-red-400" />
            </TextField>

            <TextField isRequired name="photoUrl" type="text">
              <Label className="text-sm text-white/70">Photo URL</Label>
              <Input
                placeholder="Provide link for photo url"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#2F6FFF]"
              />
              <FieldError className="text-xs text-red-400" />
            </TextField>

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
              <Label className="text-sm text-white/70">Email</Label>
              <Input
                placeholder="john@example.com"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#2F6FFF]"
              />
              <FieldError className="text-xs text-red-400" />
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
              <Label className="text-sm text-white/70">Password</Label>
              <Input
                placeholder="Enter your password"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#2F6FFF]"
              />
              <Description className="text-xs text-white/40">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-xs text-red-400" />
            </TextField>

            <small className="text-white/50">
              Already have an account?{" "}
              <Link href="/signin" className="font-medium text-[#2F6FFF]">
                Login here
              </Link>
            </small>

            <div className="flex gap-2 w-full pt-1">
              <Button
                type="reset"
                variant="secondary"
                className="w-1/2 rounded-lg border border-white/10 bg-transparent text-white/70 hover:bg-white/5"
              >
                Reset
              </Button>
              <Button
                type="submit"
                className="w-1/2 rounded-lg bg-[#2F6FFF] font-medium text-white hover:bg-[#4C82FF]"
              >
                <Check className="size-4" />
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
