import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="mt-14 flex min-h-screen flex-col items-center">
      <div
        data-aos="fade-up"
        className="flex max-w-screen-md flex-col gap-6 px-8 lg:px-0"
      >
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

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-6 flex gap-4 px-8 lg:px-0"
      >
        <Button>Discover</Button>
        <Button variant="outline">How We Work</Button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-28 flex w-full justify-center bg-slate-800 pb-28 text-secondary"
      >
        <div className="-mt-16 max-w-screen-lg px-8 lg:px-0">
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="flex w-full justify-center"
          >
            <Image
              alt="hero"
              width={768}
              height={340}
              src="/images/hero.jpg"
              className="rounded-3xl"
              priority
            />
          </div>

          <div
            data-aos="fade-up"
            id="about-us"
            className="mt-14 max-w-screen-md"
          >
            <h3 className="mb-6 text-xl font-bold">What is Meta Vision?</h3>

            <p className="sm:text-md text-justify text-sm text-secondary-foreground">
              Meta Vision is a leader in digital solutions, dedicated to
              enhancing user experiences through innovative technology. Our team
              has over 25 years of experience in the industry, and we are
              committed to delivering top-notch services to our customers.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-y-8 md:grid-cols-3">
            <div
              data-aos="fade-up"
              className="text-center"
            >
              <h4 className="mb-1 text-3xl font-bold text-primary">
                25 Years+
              </h4>
              <p className="text-primary-foreground">Experience</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-center"
            >
              <h4 className="mb-1 text-3xl font-bold text-primary">20K+</h4>
              <p className="text-primary-foreground">User Active</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-center"
            >
              <h4 className="mb-1 text-3xl font-bold text-primary">10K+</h4>
              <p className="text-primary-foreground">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
