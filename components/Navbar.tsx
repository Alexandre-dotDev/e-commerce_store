"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

    const { user } = useUser();

    const [dropdownMenu, setDropdownMenu] = useState(false)

    return (
        <div className="sticky top-0  z-10 py-2 px-10 flex justify-between items-center bg-white">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={130} height={100} />
            </Link>

            <div className="">
                <Link href="/">
                    Home
                </Link>
            </div>
            <div>
                <div className="relative flex gap-3 items-center">
                    <Link href="/cart" className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white">
                        <ShoppingCart />
                        <p className="text-base-bold">Carrinho (0)</p>
                    </Link>
                    {user && <Menu className="cursor-pointer" onClick={() => setDropdownMenu(!dropdownMenu)} />}

                    {user && dropdownMenu && (
                        <div className="absolute top-10 right-5 flex flex-col gap-2 p-3 rounded-lg bg-white text-base-bold">
                            <Link href="wishlist" className="hover:text-red-1">Lista de Desejos</Link>

                            <Link href="orders" className="hover:text-red-1">Pedidos</Link>
                        </div>

                    )}
                    {user
                        ?
                        <UserButton afterSignOutUrl="/sign-in" />
                        :
                        <Link href="/sign-in">
                            <CircleUserRound />
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar