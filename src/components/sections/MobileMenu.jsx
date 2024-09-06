"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { headerLinks } from "../../constant/constant";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="text-gray-500 focus:outline-none"
          >
            <i className="fas fa-bars fa-2x"></i>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white p-4 w-72">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-8">
            <ul className="space-y-4">
              {headerLinks.map((link) => (
                <li key={link.name} className="mr-3 ml-3">
                  <a className="text-primary" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-1">
              <a href="tel:8404802201" className="w-full">
                <Button className="mt-4 w-full">
                  <i className="fas fa-phone text-center p-1"></i>
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/918404802201" className="w-full">
                <Button className="mt-4 w-full bg-green-600">
                  <i className="fa-brands fa-whatsapp text-center p-1"></i>
                  WhatsApp
                </Button>
              </a>
            </div>
          </nav>
          {/* <SheetClose asChild>
            <Button className="mt-4 w-full">Close</Button>
          </SheetClose> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
