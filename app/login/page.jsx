import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import LoginForm from "@/app/components/organisms/LoginForm";

const Login = async () => {
  const cookieStore = cookies();
  const encodedToken = cookieStore.get("authToken");

  if (encodedToken) {
    if (encodedToken.value) {
      redirect("/dashboard");
    }
  }

  const apiEndpoint = "https://lively.unravelplc.com/api/login";

  const handleSubmit = async (formData) => {
    "use server";
    const phone = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });

    if (response.ok) {
      const {
        data: { token },
      } = await response.json();

      cookies().set({
        name: "authToken",
        value: token,
        httpOnly: true,
        path: "/",
      });

      redirect("/dashboard");
    }
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-96 pt-8 mx-auto">
          <Image src="/unravel logo.svg" alt="logo" width={400} height={100} />
        </div>

        <div className="flex flex-col items-center mt-8 px-6 py-4 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Sign in to Lively
              </h1>
              <LoginForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
