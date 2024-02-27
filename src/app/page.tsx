import { MoveRight } from "lucide-react";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { Clinets } from "@/constants/clinet";
import { feature, featuresBlock } from "@/constants/feature";
import FeatureCard from "@/components/FeatureCard";
import FeatureBlock from "@/components/FeatureBlock";
import Pricing from "@/components/Pricing";
import { testimonial } from "@/constants/testimonial";
import TestimonialCart from "@/components/TestimonialCart";
import Windows from "@/components/icons/Windows";
import Linux from "@/components/icons/Linux";
import Apple from "super-tiny-icons/images/svg/apple.svg";
import IconLink from "@/components/IconLink";

export default function Home() {
  return (
    <main className=" pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
          src="/bg.png"
          width={1920}
          height={1080}
          alt="background"
          className="absolute -z-50 w-full min-h-screen md:max-h-[670px]  lg:min-h-screen -top-20 left-0 opacity-10"
        />
        {/* Home section */}
        <section id="home" className="relative ">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20" />

          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              {/* <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                New Features Is Now Available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p> */}
              <Heading title="ChatGPT in the menu Bar" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Chat Bar is a cross-platform desktop application that provides quick access to ChatGPT from the menu bar (tray).
              </p>
              <div className="flex items-center gap-4">
                <Link href="https://github.com/rabrain/chat-bar-docs/releases" className="btn btn-outline">
                  <Windows className="w-6 h-6"/>
                  <span>Windows</span>
                </Link>
                <IconLink icon={Apple} text="Mac OS" href="https://github.com/rabrain/chat-bar-docs/releases" />
                <Link href="https://github.com/rabrain/chat-bar-docs/releases" className="btn btn-outline">
                  <Linux className="w-6 h-6"/>
                  <span>Windows</span>
                </Link>
              </div>
            </div>
            <Image
              src="/screenshot.png"
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home section */}
        {/* Clients section */}
        <section
          id="clinets"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {Clinets.map((clinet, index) => (
            <Image
              key={index}
              src={clinet.imageUrl}
              width={120}
              height={80}
              alt={clinet.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Clients section */}
        {/* Features section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28 "
        >
          {/* port 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt="second banner"
              className="absolute -z-50 w-full top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 ">
              {feature.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* port 1 */}
          {/* port 2 */}
          {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
          {/* port 2 */}
        </section>
        {/* Features section */}
        {/* Pricing section */}
        <section id="pricing" className="flex flex-col items-center">
          <Heading title="Find a plan to power your projects" isCentered />

          <Pricing />
        </section>
        {/* Pricing section */}
        {/* Testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonial.map((item, index) => (
              <TestimonialCart key={index} {...item} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}
        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Let’s try our service now!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of Ocean CRM dashboard for engineering
                teams. Boost productivity and streamline collaboration. Get
                started today!
              </p>
            </div>
            <Button>
              get started
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        {/* Contact section */}
      </div>
    </main>
  );
}
