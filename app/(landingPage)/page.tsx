import Image from "next/image";
import hero from "../../public/hero.svg";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className='max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2'>
      <div className='relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0'>
        <Image src={hero} alt='hero' />
      </div>
      <div className='flex flex-col items-center gap-y-8'>
        <h1 className='text-xl lg:text-3xl font-extrabold text-green-600 max-w-[480px] text-center'>
          Learn, practice, and master new languages with Talkingo
        </h1>
        <div className='flex flex-col items-center gap-y-3 max-w-[330px] w-full'>
          <ClerkLoading>
            <LoaderCircle className='h-5 w-5 text-green-600 animate-spin ' />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode='modal'
                forceRedirectUrl='/learn'
                signInForceRedirectUrl='/learn'
              >
                <Button className='text-lg w-full' variant={"secondary"}>
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode='modal'
                signUpForceRedirectUrl='/learn'
                forceRedirectUrl='/learn'
              >
                <Button className='text-lg w-full ' variant={"primaryOutline"}>
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                size='lg'
                variant={"secondary"}
                className='w-full'
                asChild
              >
                <Link href='/learn'>Continue learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Home;
