import Image from "next/image";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="bg-slate-100 pt-20">
      <div className="flex flex-col items-center bg-slate-800">
        <div className="relative -mt-12 mb-24 w-full max-w-screen-lg rounded-xl bg-gradient-to-r from-primary to-violet-400 px-16 py-10">
          <div className="w-3/4">
            <h3 className="mb-6 text-4xl font-extrabold text-secondary">
              Enhance Your Digital Journey with Meta Vision
            </h3>
            <p className="text-secondary">
              Join thousands of satisfied customers who have transformed their
              digital experience with us. Sign up for our newsletter to stay
              updated on our latest products and services.
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
            className="absolute bottom-0 right-12 select-none"
          />
        </div>
      </div>

      <div className="flex justify-center bg-slate-800 pb-24 text-secondary">
        <div className="grid w-full max-w-screen-lg grid-cols-2 gap-24">
          <div>
            <h2 className="text-xl font-extrabold">META Vision</h2>
            <p className="mt-4 text-secondary-foreground">
              Leading the way in digital transformation. We are committed to
              providing the best digital solutions to help you achieve your
              goals.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div>
              <h4 className="font-bold">Pricing</h4>
              <div className="mt-4 flex flex-col gap-2 text-secondary-foreground">
                <p className="cursor-pointer">White Label</p>
                <p className="cursor-pointer">Cobrand</p>
                <p className="cursor-pointer">Career</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold">Solution</h4>
              <div className="mt-4 flex flex-col gap-2 text-secondary-foreground">
                <p className="cursor-pointer">White Label</p>
                <p className="cursor-pointer">Cobrand</p>
                <p className="cursor-pointer">Career</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold">Category</h4>
              <div className="mt-4 flex flex-col gap-2 text-secondary-foreground">
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
