import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4">
        <Link href={"/home"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="car logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" type="button" title="Sign in"/>
      </nav>
    </header>
  );
};

export default Navbar;
