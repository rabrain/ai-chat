import { Feature } from "@/types/interfaces";
import Image from "next/image";
import { FC } from "react";

interface FeatureCardProps extends Feature {}

const FeatureCard: FC<FeatureCardProps> = ({ title, imageUrl, content }) => {
  return (
    <article className="w-full md:max-w-[30rem] lg:max-w-[36rem] border-2 border-transparent rounded-lg py-4 px-8 hover:bg-slate-800 hover:border-sky-600 cursor-pointer">
      <article className="flex flex-col items-center md:items-start lg:flex-row lg:items-center gap-6">
        <Image src={imageUrl} width={50} height={50} alt={title} />
        <div className="flex flex-col text-center md:text-start space-y-1">
          <h4 className="text-slate-100 font-bold text-base">{title}</h4>
          <p className="text-sm leading-6">{content}</p>
        </div>
      </article>
    </article>
  );
};

export default FeatureCard;
