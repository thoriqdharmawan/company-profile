import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="mt-14 flex flex-col items-center">
      <div className="flex max-w-screen-md flex-col gap-6">
        <p className="text-center font-semibold text-primary">
          WELCOME TO META VISION
        </p>
        <h1 className="text-center text-6xl font-extrabold">
          Elevating Your Digital Experience
        </h1>
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum ea,
          perspiciatis maxime modi numquam ullam animi optio possimus dolorum
          dolores quidem, repudiandae officiis ex quas voluptas vitae cupiditate
          adipisci!
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Button>Discover</Button>
        <Button variant="outline">How We Work</Button>
      </div>

      <div className="mt-28 flex w-full justify-center bg-slate-800 pb-28 text-secondary">
        <div className="-mt-16 max-w-screen-lg">
          <div className="flex w-full justify-center">
            <Image
              alt="hero"
              width={768}
              height={340}
              src="/images/hero.jpg"
              className="rounded-3xl"
            />
          </div>

          <div id="about-us" className="mt-14 max-w-screen-md">
            <h3 className="mb-6 text-xl font-bold">What is Meta Vision?</h3>

            <p className="text-secondary-foreground">
              Meta Vision is a leader in digital solutions, dedicated to
              enhancing user experiences through innovative technology. Our team
              has over 25 years of experience in the industry, and we are
              committed to delivering top-notch services to our customers.
            </p>
            <p className="mt-3 text-secondary-foreground">
              Meta Vision is a leader in digital solutions, dedicated to
              enhancing user experiences through innovative technology. Our team
              has over 25 years of experience in the industry, and we are
              committed to delivering top-notch services to our customers.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3">
            <div className="text-center">
              <h4 className="mb-1 text-3xl font-bold text-primary">
                25 Years+
              </h4>
              <p className="text-primary-foreground">Experience</p>
            </div>
            <div className="text-center">
              <h4 className="mb-1 text-3xl font-bold text-primary">20K+</h4>
              <p className="text-primary-foreground">User Active</p>
            </div>
            <div className="text-center">
              <h4 className="mb-1 text-3xl font-bold text-primary">10K+</h4>
              <p className="text-primary-foreground">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
