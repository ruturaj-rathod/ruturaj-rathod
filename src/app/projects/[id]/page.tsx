import { FadeIn } from "@/components";
import { TechPill } from "./TechPill";
import { SectionHeader } from "./SectionHeader";
import { GitHubIcon, OpenInNewIcon } from "@/components/icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export default function ProjectPage() {
  return (
    <div className="layout-content-container flex flex-col w-full max-w-5xl px-4 sm:px-6">
      {/* HERO SECTION */}
      <FadeIn>
        <section className="@container mb-12 sm:mb-16 md:mb-20">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-8 sm:p-12 text-left"
            style={{
              backgroundImage: `
                linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%),
                url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpz8U66YPFy5v4XvGiCjQsN21UKIo5LhyIcaLZaav2zQlIAP6aMTpHJWhYtObLZF02RMn_yTdx5V8Y2_wROQOnAXztV0ZzhDeUgqlNCrYropj8XIukpz7OUbFqrllbU1A6CMTxIxbf3DZS59QxiYmRev9xizzOfECNVarQjKMZsT4Fz2PMzPO57hXFj6ae06hZ6GXuJ04q5Unu-7ignS3vDrmjGMe6IKSJl9xpWuzGkkgqGKplQBMd3JD0tUDBSMCyaH7w-AbmsSo")
              `,
            }}
          >
            <div className="flex flex-col gap-3 max-w-3xl">
              <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-6xl">
                NextGen E-commerce Platform
              </h1>
              <h2 className="text-white/90 text-lg font-normal leading-normal @[480px]:text-xl">
                A blazing-fast, server-rendered online store built with modern
                frontend technologies.
              </h2>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ROLE / DURATION / STACK */}
      <FadeIn delay={0.1}>
        <section className="mb-12 sm:mb-16 md:mb-20 px-2">
          {/* CTA Buttons */}
          <div className="flex-wrap gap-4 flex justify-start ">
            <button className="flex items-center gap-2 rounded-lg h-12 px-6 bg-blue-500 text-white hover:opacity-90 transition">
              <OpenInNewIcon className="text-xl" />
              View Live Site
            </button>

            <button className="flex items-center gap-2 rounded-lg h-12 px-6 text-white bg-[#333338] hover:bg-white/20 transition">
              <GitHubIcon className="text-xl" height={20} width={20} />
              View on GitHub
            </button>
          </div>
        </section>
      </FadeIn>

      {/* CONTENT SECTIONS */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        {/* PROJECT OVERVIEW */}
        <FadeIn>
          <section>
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              <SectionHeader title="Technology Stack" />

              <div className="flex gap-2 flex-wrap">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Next.js",
                ].map((tech) => (
                  <TechPill key={tech} label={tech} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* PROJECT OVERVIEW */}
        <FadeIn>
          <section>
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              <SectionHeader title="Project Overview" />

              <p className="text-base sm:text-lg leading-relaxed text-gray-300 md:w-2/3">
                This project aimed to create a high-performance, visually
                appealing e-commerce platform...
              </p>
            </div>
          </section>
        </FadeIn>

        {/* FEATURES */}
        <FadeIn delay={0.1}>
          <section>
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              <SectionHeader title="Features" />

              <ul className="text-base sm:text-lg leading-relaxed text-gray-300 md:w-2/3 space-y-3 list-disc pl-5">
                <li>
                  <strong>Server-Side Rendering (SSR):</strong> Built with
                  Next.js.
                </li>
                <li>
                  <strong>Dynamic Product Catalog:</strong> Real-time updates.
                </li>
                <li>
                  <strong>Secure Payment Gateway:</strong> Integrated Stripe.
                </li>
                <li>
                  <strong>Component-Based Design System:</strong> Modular UI
                  library.
                </li>
              </ul>
            </div>
          </section>
        </FadeIn>

        {/* PROCESS */}
        <FadeIn delay={0.2}>
          <section>
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              <SectionHeader title="Process" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:w-2/3">
                <div>
                  <h3 className="text-2xl font-bold pb-3 text-white">
                    The Challenge
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300">
                    Achieving sub-second load time while handling dynamic
                    data...
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold pb-3 text-white">
                    The Solution
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300">
                    Implemented SSR, caching strategies, and Node.js APIs...
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* IMAGE GALLERY */}
        <FadeIn delay={0.25}>
          <section>
            <div className="space-y-6">
              <h2 className="text-3xl text-white font-bold tracking-[-0.02em]">
                Visual Showcase
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <img
                  className="rounded-xl object-cover aspect-4/3"
                  src="IMAGE_URL_1"
                />
                <img
                  className="rounded-xl object-cover aspect-4/3"
                  src="IMAGE_URL_2"
                />
                <img
                  className="rounded-xl object-cover sm:col-span-2 aspect-video"
                  src="IMAGE_URL_3"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* KEY LEARNINGS */}
        <FadeIn delay={0.3}>
          <section>
            <div className="bg-white/5 rounded-xl p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                <h3 className="text-2xl text-white font-bold pb-4 md:w-1/3">
                  Key Learnings
                </h3>

                <p className="text-base leading-relaxed text-gray-300 md:w-2/3">
                  Performance-first development made a significant impact on
                  engagement...
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-24 pt-8 pb-4">
        <div className="flex justify-between items-center">
          <a className="flex items-center gap-2 text-white hover:text-blue-500 transition">
            <ChevronLeftIcon />
            <span className="text-sm font-semibold">Previous Project</span>
          </a>

          <a className="flex items-center gap-2 text-white hover:text-blue-500 transition">
            <span className="text-sm font-semibold">Next Project</span>
            <ChevronRightIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}
