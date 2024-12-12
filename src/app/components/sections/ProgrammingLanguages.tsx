import { ReactNode } from "react";
import Image from "next/image";

export default function ProgrammingLanguages() {
  return (
    <div
      className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="programming-languages"
    >
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5">Stacks</h1>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-4">
          {languageItems.map((item) => (
            <div
              className="flex items-center justify-center p-2.5 rounded-lg hover:bg-[#282828] transition-all duration-200"
              key={item.name}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const languageItems: {
  name: string;
  component: ReactNode;
}[] = [
  {
    name: "Java",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        width={40}
        height={40}
        alt="Java"
      />
    ),
  
  },
  {
    name: "Ruby",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
        width={40}
        height={40}
        alt="Ruby"
      />
    ),
  },
  {
    name: "Django",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        width={40}
        height={40}
        alt="Django"
      />
    ),
  },
  {
    name: "Golang",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        width={40}
        height={40}
        alt="Golang"
      />
    ),
  },
  {
    name: "Mocha",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg"
        width={40}
        height={40}
        alt="Mocha"
      />
    ),
  },
  {
    name: "kotlin",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        width={40}
        height={40}
        alt="kotlin"
      />
    ),
  },
  {
    name: "apachekafka",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg"
        width={40}
        height={40}
        alt="apachekafka"
      />

    ),
  },
  {
    name: "rabbitmq",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg"
        width={40}
        height={40}
        alt="rabbitmq"
      />

    ),
  },
];
