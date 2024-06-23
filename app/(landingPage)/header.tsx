import Image from "next/image";
import mascot from "../../public/mascot.svg";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
      <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src={mascot} height={40} width={40} alt='Mascot image' />
          <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
            Talkingo
          </h1>
        </div>
        {/* If we are not logged in */}
        <ClerkLoading>
          <LoaderCircle className='h-5 w-5 text-green-600 animate-spin ' />
        </ClerkLoading>

        {/* If we are logged in */}
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode='modal'
              signUpForceRedirectUrl='/learn'
              forceRedirectUrl='/learn'
            >
              <Button className='text-lg text-[#111]' variant={"ghost"}>
                LOGIN
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
