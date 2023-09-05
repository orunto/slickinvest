import Image from "next/image";
import Link from 'next/link'

export default function NavLogo () {
    return(
        <Link href="/">
            <div>
                <Image src='/Slickinvest Logo.png' height={30} width={134} alt='softdrobe logo' />
            </div>
        </Link>
    )
}