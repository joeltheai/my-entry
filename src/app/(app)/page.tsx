import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-centre items-center p-20">
        <div className=" w-full max-w-[600px] mx-auto">
          <div className=" text-6xl font-bold mb-5 text-primary">hello</div>
          <div className=" text-muted-foreground text-2xl text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, voluptatum optio labore, aperiam quam nisi non modi
            sequi quis eos animi possimus a fuga! Qui ipsam voluptate laudantium
            eum accusantium?
          </div>
        </div>
      </div>
    </>
  );
}
