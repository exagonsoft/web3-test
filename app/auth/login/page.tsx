"use client";

import TextInput from "@/components/CustomTextInput";
import { authFormValidator } from "@/validators/authValidators";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const validateForm = async () => {
    let _isValid = false;
    if (formRef.current) {
      _isValid = await authFormValidator();
    }

    if (_isValid) {
      router.push('/');
    }
  };

  useEffect(() => {
    validateForm();
  }, []);

  return (
    <div className="wfull h-screen flex justify-center items-center">
      <form
        ref={formRef}
        className="p-8 px-12 rounded-md shadow-md flex flex-col gap-4 min-w-[90%] md:min-w-[60%] lg:min-w-[40%] xl:min-w-[30%] 2xl:min-w-[25%] border border-slate-300"
      >
        <TextInput
          id="emailTextBox"
          label="Email"
          type="email"
          value={email}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
        />
        <TextInput
          id="passwordTextBox"
          label="Password"
          type="password"
          value={password}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setPassword(e.target.value)
          }
        />
        <button
          type="submit"
          className="w-full rounded-md p-4 py-2 bg-slate-300 hover:shadow-md transition-[.5s]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
