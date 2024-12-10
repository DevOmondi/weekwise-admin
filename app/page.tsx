"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    // Handle login logic here

    const login_details = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login_details),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await response.json();
      setSuccessMessage("Logging you in shortly :)");
      console.log("API Response:", data);
      sessionStorage.setItem('token', data?.token)
      // window.location.href = "/dashboard";
      router.push("/dashboard");
    } catch (error) {
      // Type guard to check if error is an instance of Error
      if (error instanceof Error) {
        setErrorMessage(error.message || "Failed to Log you in");
      } else {
        // Fallback for unknown error types
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24  mb-4">
            <Image
              src="/weekwise_logo.png"
              alt="Weekwise logo"
              width={400}
              height={400}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Portal</h2>
          <p className="text-gray-600 mt-2">
            Welcome back! Please log in to continue.
          </p>
        </div>

        {/* Display error or success messages */}
        {errorMessage && (
          <div className="text-red-500 text-center text-sm">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 text-center text-sm">
            {successMessage}
          </div>
        )}
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoading ? "Hang tight..." : "Log In"}
            <LogIn className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
