export interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  github: string;
  colour: string;
  id: string;
}

export const projects: Project[] = [
  {
    title: "Say It In A Letter",
    description:
      "An interactive postcard maker React app, letting users design and send customised messages. Built in 24 hours in a team of two at School Of Code.",
    src: "SayItInALetter.png",
    link: "https://postcard-generator-khaki.vercel.app/",
    github: "https://github.com/SchoolOfCode/Say-It-In-A-Letter",
    colour: "#dfdcdb",
    id: "SayItInALetter",
  },
  {
    title: "State Of It",
    description:
      "An interactive guide to understanding useState in React, that I created in two days as part of a bootcamp brief to develop an educational resource.",
    src: "StateOfIt.png",
    link: "https://state-of-it.vercel.app/",
    github: "https://github.com/ccyoung22/StateOfIt",
    colour: "#c8c5c4",
    id: "StateOfIt",
  },
  {
    title: "Interactive Whiteboard App",
    description:
      "An ongoing self-directed project designed to deepen my React skills. Features include drawing with React Canvas Draw and customisable text options.",
    src: "WhiteBoard.png",
    link: "https://moodboard-two-ruddy.vercel.app/",
    github: "https://github.com/ccyoung22/Moodboard",
    colour: "#b4b2b0",
    id: "InteractiveWhiteboardApp",
  },
  {
    title: "Flock",
    description:
      "A community-driven app designed to help combat loneliness by connecting people through shared interests, conversation prompts, and local events. Built with Next.js and Typescript.",
    src: "Flock.png",
    link: "https://final-project-flock.vercel.app/",
    github: "https://github.com/Zsolt-qwerty/final-project-flock",
    colour: "#a19f9e",
    id: "Flock",
  },
];
