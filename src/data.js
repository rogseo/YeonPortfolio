import migrate from "./images/Migrate_Demo.gif"
import tuneTalk from "./images/tuneTalk demo_edit.gif"
import movieandmore from "./images/Movies and more.GIF"
import techBlog from "./images/challenge 14 demo.gif"
import weatherDashboard from "./images/Project Tracker.gif"
import password from "./images/Password Generator.gif"
import codeQuiz from "./images/Code Quiz.gif"
import rabbit from "./images/rabbit-demo.gif"


export const projects = [
  {
    title: "Rabbit",
    subtitle: "React Native",
    description:"Rabbit is a mobile app that lets you chat with other users and catch up on news and weather.",
    image:rabbit,
    link: "https://migrate-abroad.herokuapp.com/",
    repo : "https://github.com/rogseo/Rabbit",
    tech : ['ReactNative','MongoDB','SendBird','React','JWT']
  },
  {
    title: "Migrate",
    subtitle: "MERN Stack",
    description:"This app is designed to provide data on countries and their social performance so users can make informed decisions about where in the world to live.",
    image:migrate,
    link: "https://youtu.be/ADOW6h7ZTv8",
    repo : "https://github.com/rogseo/migrate",
    tech : ['React','MongoDB','Apollo-server','GreenSocks',]
  },
    {
      title: "tuneTalk",
      subtitle: "MERN Stack",
      description:"A web application enables users to share and discuss their favorite music with spotify player embedded.",
      image:tuneTalk,
      link: "https://immense-meadow-73808.herokuapp.com/",
      repo : "https://github.com/drewsparker/tuneTalk",
      tech : ['Node','Mysql','express','Sequelize','Express-handlebars']
    },
    {
      title: "TechBlog",
      subtitle: "React and Python",
      description: "A blog web site to publish articles, blog posts, and comments on other's post.",
      image: techBlog,
      link: "https://tech-blogg-story.herokuapp.com/",
      repo: "https://github.com/rogseo/techBlog",
      tech : ['Node','Mysql','express','Sequelize','Express-handlebars']
    },
    {
      title: "Movie&more",
      subtitle: "React and Firebase",
      description: "We created a space for the movie enthusiast and those who are movie-curious to search for a title and find fun and interesting information related to a movie. By pulling API's from Giphy.com and YouTube.com we added some fun to what would otherwise be a mundane IMDb search. Our site pulls the movie poster, plot and rating information from IMDb via Online Movie Database API and brings it together with movie-related GIFs and linked YouTube clips in one nifty modal.",
      image: movieandmore,
      link: "https://https://sarahthoorens.github.io/movies-and-more/.com",
      repo: "https://github.com/sarahthoorens/movies-and-more",
      tech: ['HTML','Javascript','API','CSS','Foundation']
    },
    {
      title: "Weather Dashboard",
      subtitle: "React Hooks",
      description:"I can see the current and future weather forecast by searching city that I want to see.",
      image:weatherDashboard,
      link: "https://rogseo.github.io/weatherDashboard/",
      repo:"https://github.com/rogseo/weatherDashboard",
      tech: ['HTML','Javascript','API','CSS']
    },
    {
      title: "Password Generator",
      subtitle: "React Hooks",
      description:"When you sign up, you are asked to create a password and the criteria is all different. I want to randomly generate a password that meets certain criteria on my choice.",
      image: password,
      link: "https://rogseo.github.io/passwordGenerator/",
      repo:"https://github.com/rogseo/passwordGenerator",
      tech:['HTML','Javascript','CSS', 'Bootstrap']
    },
    {
      title: "Timer Quiz",
      subtitle: "React Hooks",
      description:"This App will ask 5 questions with 4 options of answers. The time is given for 75s and score is equal to the time left. When you answer incorrectly, time is subtracted 10s from the clock. When you finish all questions, you are presented with a score and you can save your initial and score. You can gauge your progress compared to my peers.",
      image: codeQuiz,
      link: "https://github.com/rogseo/codeQuiz",
      repo:"https://rogseo.github.io/codeQuiz/",
      tech:['HTML','Javascript','CSS','Bootstrap']
    },
  ];