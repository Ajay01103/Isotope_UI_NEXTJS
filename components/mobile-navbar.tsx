import React from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ScrollArea } from "./ui/scroll-area"
import Link from "next/link"
import { SiteLogo } from "./site-logo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SheetTrigger asChild>
          <div className="md:hidden">
            <button
              type="button"
              className="size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  x1="3"
                  x2="21"
                  y1="6"
                  y2="6"
                />
                <line
                  x1="3"
                  x2="21"
                  y1="12"
                  y2="12"
                />
                <line
                  x1="3"
                  x2="21"
                  y1="18"
                  y2="18"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="pl-1 pr-0 pt-9"
        >
          <div className="w-full px-7">
            <Link
              href="/"
              className="flex items-center"
            >
              <SiteLogo
                className="mr-2 size-4"
                aria-hidden="true"
              />
            </Link>
          </div>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="pl-1 pr-7">
              <Accordion
                type="multiple"
                className="w-full"
              >
                <AccordionItem value="Lobby">
                  <AccordionTrigger>Lobby</AccordionTrigger>

                  <AccordionContent>
                    <div className="flex flex-col space-y-2 cursor-pointer">
                      <h3>Products</h3>
                      <h3>Create List</h3>
                      <h3>Blog</h3>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="multiple"
                className="w-full"
              >
                <AccordionItem value="Account">
                  <AccordionTrigger>My Account</AccordionTrigger>

                  <AccordionContent>
                    <div className="flex flex-col space-y-2 cursor-pointer">
                      <h3>Account</h3>
                      <h3>Orders</h3>
                      <h3>Stores</h3>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}
