import Image from "next/image";

export default function HeroSection(props) {
  return (
    <div
      className={`flex flex-col p-[1rem] gap-[1rem] ${props.HeroParams.id % 2 ? "md:flex-row" : "md:flex-row-reverse"}
 mx-auto items-center mt-[4rem]`}
    >
      <div
        className={`flex flex-col gap-[1rem] md:w-[50%] ${props.HeroParams.id % 2 ? "md:pr-[4rem]" : "md:pl-[4rem]"}`}
      >
        <h6>{props.HeroParams.subtitle}</h6>
        <h1>{props.HeroParams.title}</h1>
        <span>{props.HeroParams.description}</span>
      </div>
      <div className="flex mx-auto">
        <Image
          src={props.HeroParams.img}
          alt="Picture"
          className="rounded-[25px] border-2 border-[#171717] md:w-full"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
