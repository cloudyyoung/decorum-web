import { Heading, Subheading } from "../components/heading"
import { Button } from "../components/button"
import { PlusIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"

export const Home = () => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute left-0 right-0 -top-10">
            <div className="flex items-center justify-center h-12 w-full animated-gradient">
            </div>
          </div>
        </div>
      </div>

      <section className="flex items-center jusityf-center h-screen p-4">
        <div className="w-full">
          <Heading>Décorum-Gen</Heading>
          <Subheading className="font-serif text-xs">An unofficial scenarios generator for the board game.</Subheading>

          <div className="flex gap-2 mt-6">
            <Button href="/create">
              Create
              <PlusIcon />
            </Button>
            <Button color="white" href="/join">
              Join
              <ArrowUpRightIcon />
            </Button>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white">
        <p className="prose break-word italic text-[12px] leading-[13px] ">
          Disclaimer: This is not associated with the original board game, Floodgate Games, or any of its affiliates.
          Assets from the original game are used for educational purposes only, and all rights are reserved to the original creators.
          No commercial use is intended.
          This is open-source on GitHub and can be found at <a className="underline" href="https://github.com/cloudyyoung/decorum-web" target="_blank" rel="noreferrer">cloudyyoung/decorum-web</a>.
          Please don't sue, and enjoy!
        </p>
      </div>
    </>
  )
}

export default Home