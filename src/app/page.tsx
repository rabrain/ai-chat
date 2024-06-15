import { MoveRight } from "lucide-react";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { Clients } from "@/constants/client";
import { feature, featuresBlock } from "@/constants/feature";
import FeatureCard from "@/components/FeatureCard";
import FeatureBlock from "@/components/FeatureBlock";
import FAQ from "@/components/FAQ";
import screenshot from 'public/screenshot-full.jpg';
import Download from "@/components/Download";

export default function Home() {
  const downloadUrl = "https://github.com/rabrain/ai-chat/releases/latest"
  return (
    <main className="pt-24 lg:pt-28 antialiased">
      <div className="relative container lg:w-4/5">
        {/* <Image
          src="/bg.png"
          width={1920}
          height={1080}
          alt="background"
          className="absolute -z-50 w-full min-h-screen md:max-h-[670px]  lg:min-h-screen -top-20 left-0 opacity-10"
        /> */}
        {/* Home section */}
        <section id="home" className="relative">
          <figure className="bubble w-80 lg:w-[520px] h-80 bg-indigo-600 top-16" />
          <figure className="bubble w-80 lg:w-[430px] h-80 bg-sky-600 bottom-16 md:bottom-44 md:right-20" />

          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              {/* <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                New Features Is Now Available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p> */}
              <Heading title="Open AI Chat Bot in the Menu Bar" />
              <p className="max-w-[46rem] leading-normal md:text-xl sm:text-lg sm:leading-8">
                AI Chat is a cross-platform ChatGPT desktop application that provides quick access to chatbots like OpenAI ChatGPT from the menu bar (tray).
              </p>
              <Download repo="rabrain/ai-chat" />
            </div>
            <div>
              <div className="carousel carousel-center w-full">
                <div id="slide1" className="carousel-item w-full">
                  <video controls>
                    <source src="/preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div id="slide2" className="carousel-item w-full">
                  <Image
                    src={screenshot}
                    alt="banner"
                    className="mx-auto shadow-xl rounded-box"
                  />
                </div>
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
              </div>
            </div>
          </div>
        </section>
        {/* Home section */}
        {/* Clients section */}
        {Clients.length > 0 && (<section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-6 gap-x-12 gap-y-4"
        >
          {Clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-20 mx-auto"
            />
          ))}
        </section>
        )}
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
              <Heading title="Features" />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                AI Chat eliminates the need to switch between windows when using ChatGPT as our daily assistant.
              </p>
              <Link href={downloadUrl}>
                <Button>Get Started</Button>
              </Link>
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
        {/* <section id="pricing" className="flex flex-col items-center">
          <Heading title="Find a plan to power your projects" isCentered />

          <Pricing />
        </section> */}
        {/* Pricing section */}
        {/* Testimonials section */}
        {/* <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonial.map((item, index) => (
              <TestimonialCart key={index} {...item} />
            ))}
          </div>
        </section> */}
        {/* Testimonials section */}
        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Chat with GPT in the Menu Bar" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of AI Chat for seamless ChatGPT integration on the desktop.
                Boost productivity and streamline workflows.
                Get started today!
              </p>
            </div>
            <Link href={downloadUrl} className="btn btn-primary">
              Download
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
        {/* Contact section */}
        <section>
          <h1 className="text-center text-4xl font-bold mb-4">FAQ</h1>
          <FAQ />
        </section>
      </div>
    </main>
  );
}
