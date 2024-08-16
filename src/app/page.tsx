import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default async function Home() {

  const words = ["Perfect", "Best", "Dream", "Ideal"];

  return (
    <main className="h-screen grid grid-cols-2 justify-center items-center gap-16">
      <div className="bg-landing-portrait h-full w-full bg-cover" />
      <div className="flex flex-col gap-4">
        <div className="absolute right-8 top-8 flex gap-8 items-center">
          <div className="flex gap-4">
            <Button variant={'link'}>About</Button>
            <Button variant={'link'}>Contact</Button>
          </div>
          <form>
            <Button type="submit">Sign in</Button>
          </form>
        </div>
        <div className="text-5xl font-semibold text-neutral-600">
          Find
          <FlipWords words={words} /> <br />
          rental stays 20x faster
        </div>
        <div className="">
          <Button className="border-neutral-600" variant={'outline'} size={'lg'} asChild>
            <Link href={"/search"} className="text-neutral-600">Search<IconArrowNarrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
