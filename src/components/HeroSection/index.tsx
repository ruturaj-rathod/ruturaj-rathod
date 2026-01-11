import JobTitle from "./JobTitle";
import ProfileImg from "./ProfileImg";
import { FadeIn } from "@/components/animate";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center gap-12 mb-24 md:mb-32 justify-between"
      id="about"
    >
      <FadeIn className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-medium leading-tight text-white">
          Ruturaj Rathod
        </h1>
        <h2 className="mt-2 text-lg md:text-xl font-medium text-blue-500">
          <JobTitle />
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
          I build intuitive and performant web applications with a focus on user
          experience and clean code, bringing ideas to life with modern
          technology.
        </p>
      </FadeIn>
      <div className="flex-nowrap">
        <ProfileImg />
      </div>
    </section>
  );
}
