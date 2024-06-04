import Image from "next/image";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="bg-slate-100 pt-20">
      <div className="bg-slate-800 flex flex-col items-center">
        <div className="bg-gradient-to-r from-primary to-violet-400 max-w-screen-lg w-full px-16 py-10 rounded-xl -mt-12 mb-24 relative">
          <div className="w-3/4">
            <h3 className="font-extrabold text-4xl text-secondary mb-6">
              Let&apos;s Make Simply Your Digital Adoption
            </h3>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi, non atque quia odit, ipsam, tenetur veniam aliquam fuga
              voluptas placeat iure
            </p>

            <div className="mt-12">
              <Button variant="outline">Subcribe</Button>
            </div>
          </div>
          <Image
            alt="woman"
            width={220}
            height={280}
            src="/images/woman1.png"
            className="absolute right-12 bottom-0 select-none"
          />
        </div>
      </div>

      <div className="pb-24 bg-slate-800 flex justify-center text-secondary">
        <div className="grid grid-cols-2 gap-24 w-full max-w-screen-lg">
          <div>
            <h2 className="font-extrabold text-xl">META Vision</h2>
            <p className="mt-4 text-secondary-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias vitae vel obcaecati unde dolorem sit veritatis? Nam culpa
              facilis totam quasi inventore harum adipisci, iste tenetur
              reiciendis commodi? Dolorum!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div>
              <h4 className="font-bold">Pricing</h4>
              <div className="text-secondary-foreground mt-4 flex flex-col gap-2">
                <p className="cursor-pointer">White Label</p>
                <p className="cursor-pointer">Cobrand</p>
                <p className="cursor-pointer">Career</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold">Solution</h4>
              <div className="text-secondary-foreground mt-4 flex flex-col gap-2">
                <p className="cursor-pointer">White Label</p>
                <p className="cursor-pointer">Cobrand</p>
                <p className="cursor-pointer">Career</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold">Category</h4>
              <div className="text-secondary-foreground mt-4 flex flex-col gap-2">
                <p className="cursor-pointer">White Label</p>
                <p className="cursor-pointer">Cobrand</p>
                <p className="cursor-pointer">Career</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
