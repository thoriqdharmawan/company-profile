import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="max-w-screen-md flex flex-col gap-6">
        <p className="text-center font-semibold text-primary">
          WELCOME TO META VISION
        </p>
        <h1 className="text-6xl font-extrabold text-center">
          Simplify Your Digital Adoption
        </h1>
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum ea,
          perspiciatis maxime modi numquam ullam animi optio possimus dolorum
          dolores quidem, repudiandae officiis ex quas voluptas vitae cupiditate
          adipisci!
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <Button>Discover</Button>
        <Button variant="outline">How We Work</Button>
      </div>

      <div className="mt-28 bg-slate-800 w-full flex justify-center pb-28 text-secondary">
        <div className="-mt-16 max-w-screen-lg">
          <div className="w-full flex justify-center">
            <Image
              alt="hero"
              width={768}
              height={340}
              src="/images/hero.jpg"
              className="rounded-3xl"
            />
          </div>

          <div className="mt-14 max-w-screen-md">
            <h3 className="text-xl font-bold mb-6">
              Companues That Use Meta Vision
            </h3>

            <p className="text-secondary-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              neque. Quod perspiciatis eligendi alias! Necessitatibus ab
              reprehenderit quia placeat doloribus fugit illo saepe hic!
              Officiis libero vero sequi iusto numquam.
            </p>
          </div>

          <div className="grid grid-cols-3 mt-14">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-primary mb-1">
                25 Years+
              </h4>
              <p className="text-primary-foreground">Experience</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-primary mb-1">20K+</h4>
              <p className="text-primary-foreground">User Active</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-primary mb-1">10K+</h4>
              <p className="text-primary-foreground">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
