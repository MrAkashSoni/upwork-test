import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Button, buttonVariants } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../../ui/navigation-menu"
import Modal from "../modal"

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="bg-red-900 h-14 w-full flex items-center justify-between px-6 lg:px-12 xl:px-20">
        <div className="flex items-center">
          <NavigationMenu className="text-slate-100 w-full">
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref >
                  <NavigationMenuLink>
                    <Image
                      alt="flash-card-image"
                      src={"/logo-2.png"}
                      height={50}
                      width={50}
                    />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/test-1" legacyBehavior passHref >
                  <NavigationMenuLink>
                    Test-1
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/test-2" legacyBehavior passHref >
                  <NavigationMenuLink>
                    Test-2
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button variant="ghost" className="text-slate-100" onClick={() => setOpen(true)}>Login</Button>
        </div>
      </div>

      <Modal open={open} onOpenChange={() => setOpen(false)} />
    </>
  )
}

export default NavBar













// import React, { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"

// import { Button, buttonVariants } from "@/components/ui/button"
// import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../../ui/navigation-menu"
// import Modal from "../modal"

// const NavBar = () => {
//   const [open, setOpen] = useState(false)
//   return (
//     <>
//       <div className="bg-red-900 h-14 w-full flex items-center justify-between px-6">
//         <div className="flex items-center">
//           <NavigationMenu className="text-slate-100 w-full">
//             <NavigationMenuList>
//               <NavigationMenuItem className="mr-6">
//                 <Link href="/" legacyBehavior passHref >
//                   <NavigationMenuLink>
//                     <Image
//                       src={"/logo-2.png"}
//                       height={50}
//                       width={50}
//                     />
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="mr-2">
//                 <Link href="/test-1" legacyBehavior passHref >
//                   <NavigationMenuLink>
//                     Test-1
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="mr-6">
//                 <Link href="/test-2" legacyBehavior passHref >
//                   <NavigationMenuLink>
//                     Test-2
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div>
//           {/* <NavigationMenu className="text-slate-100 w-full">
//             <Link href="/login" legacyBehavior passHref >
//               <NavigationMenuLink className={buttonVariants()}>
//                 Login
//               </NavigationMenuLink>
//             </Link>
//           </NavigationMenu> */}
//           <Button variant="ghost" className="text-slate-100" onClick={() => setOpen(true)}>Login</Button>
//         </div>
//       </div>

//       <Modal open={open} onOpenChange={() => setOpen(false)} />

//     </>
//   )
// }

// export default NavBar