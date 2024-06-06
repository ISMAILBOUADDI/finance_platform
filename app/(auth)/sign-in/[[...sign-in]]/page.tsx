import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  
  return (
    <div
					className="min-h-screen
					grid grid-cols-1 lg:grid-cols-2">
    <div
					className="h-full
					lg:flex flex-col items-center justify-center px-4">
      <div
					className="flex
					items-center justify-center pt-16 lg:pt-4">
          <SignIn
					path="/sign-in"
				/>
      </div>
      </div>
  </div>
        
);
}