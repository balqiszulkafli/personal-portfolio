import FEBHA from "../assets/projects/FEBHA.png";
import EyeCu from "../assets/projects/EyeCu.gif";
import UiTMPahang from "../assets/projects/UiTMPahang.png";
import WhoAmI from "../assets/projects/WhoAmI.png";
import WhoAmIDemo from "../assets/projectList/WhoAmI.mp4";
import FEBHADemo from "../assets/projectList/febhademo.mp4";
import EYECUDemo from "../assets/projectList/eyecudemo.mp4";

export const ProjectList = [
  {
    name: "EyeCu Mobile Application",
    image: EyeCu,
    demo: EYECUDemo,
    language: "Flutter/Dart",
    tools: "Android Studio (Emulator) , Visual Studio Code",
    desc: "During my Final Year Project (FYP), I created a Colour Vision Deficiency Test App to identify individuals with color blindness. I conducted in-depth research on different types of color blindness and the appropriate tests to be conducted. The main goal was to develop an app that could effectively evaluate color vision deficiencies. To achieve this, I incorporated a randomization technique in the app's question generation process, ensuring that the questions appeared in a random order to prevent users from memorizing the sequence. As a result, I successfully created the app, which provides a comprehensive assessment of color vision deficiencies. ",
    github: "https://github.com/balqiszulkafli/eyecu",
  },
  {
    name: "SME Advertising Platform",
    image: FEBHA,
    demo: FEBHADemo,
    language: "PHP",
    tools: "HTML,CSS,Bootstrap,XAMPP, Visual Studio Code",
    desc: "This project was a part of my diploma coursework, where I played a crucial role as a team member responsible for the administrative aspect of web development, which included CRUD operations.",
  },
  {
    name: "UiTM Pahang Mobile Directory",
    image: UiTMPahang,
    language: "Flutter/Dart",
    tools: "Android Studio (Emulator) , Visual Studio Code",
    desc: "This project is for design for UiTM Pahang Mobile Directory.The mobile is to ease user to find information such as contacts and email addresses of UiTM Pahag Staff by department category",
  },
  {
    name: "Interactive Learning Games",
    image: WhoAmI,
    demo: WhoAmIDemo,
    language: "Scratch",
    tools: "Scratch",
    desc: "The is  a course for Programming Interactive System where I need to develop a game for children age 4 and above. This application allows user to drag and drop their and answer to the shaded area, the point system are based on numbers of correct answer they get.",
  },
];
