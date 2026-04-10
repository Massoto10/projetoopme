import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#ececee] px-4">
      <Suspense
        fallback={
          <div className="h-64 w-full max-w-[26rem] animate-pulse border border-neutral-300 bg-neutral-200/80" />
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
