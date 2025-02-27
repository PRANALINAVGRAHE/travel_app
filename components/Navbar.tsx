import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useRouter } from "next/router";

const Navbar = () => {
  const { basePath } = useRouter();
  return (
    <div className="max-w-[1440px] mx-auto px-10">
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/" >
            <Image src={`${basePath}/public/hilink-logo.svg`} alt="logo" width={74} height={29}/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-green-800 flexCenter cursor-pointer pb-1.5
                transition-all hover:font-bold">
                    {link.label}
                    </Link>
            ))}

            </ul>


            <div className="lg:flexCenter hidden justify-center">
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"/>
            </div>

            
            <Image 
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
        />
        </nav>
    </div>
  )
}

export default Navbar
