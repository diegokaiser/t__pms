import Link from "next/link";
import Image from "next/image";
import LogoFull from "@/public/assets/icons/logo-full.svg"
import OnBoarding from "@/public/assets/images/onboarding-img.png"
import PatientForm from "@/components/forms/PatientForm";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP verification | passkeymodal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src={LogoFull}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; 2024 Asclepius
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image 
        src={OnBoarding}
        height={1000}
        width={1000}
        alt="PMS"
        className="side-img max-w-[50%] rounded-3xl"
      />
    </div>
  )
}
