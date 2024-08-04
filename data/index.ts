export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "My passion is creating things, thus began my journey. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I am constantly trying to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for front-end development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently learning new languages",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Need my email?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Space",
      des: "A full-stack capstone project. Allows users to book a space for events, co-working, seminars etc. with an A.I Chatbot to handle customer questions.",
      img: "/capstone.png",
      iconLists: ["/re.svg", "/bootstrap.svg", "/redux.svg", "/postgre.svg", "/nodejs.svg", '/firebase.svg', '/gemini.svg'],
      link: "https://capstone-project-seven-zeta.vercel.app/",
    },
    {
      id: 2,
      title: "Twitter Clone (PC-only)",
      des: "A Twitter inspired clone, made for PC. Happy Tweeting!",
      img: "/twt.png",
      iconLists: ["/re.svg", "/bootstrap.svg", "/redux.svg", '/firebase.svg'],
      link: "https://twitter-clone-lake-iota.vercel.app/",
    },
    {
      id: 3,
      title: "Restaurant Reservation Web-App",
      des: "My first fullstack project that utilizes CRUD functions. Users can create restaurants and set, delete and update their reservations.",
      img: "/booking.png",
      iconLists: ["/re.svg", "/bootstrap.svg", "/redux.svg", "/postgre.svg", "/nodejs.svg"],
      link: "https://github.com/adrianlinyh/Booking-App",
    },
    {
      id: 4,
      title: "This website!",
      des: "Built a website to display my projects. Utilized Framer Motion and TypeScript.",
      img: "/ptfl.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianlinyh/portfolio",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Adrian is an extremely hard worker. I enjoyed collaborating with him on certain tasks and he was excellent throughout. A great communicator as well, shown when he dealt with C-Suites with confidence and ease. Companies not looking to add him to their team would be losing out.",
      name: "B.L.",
      title: "Director, Anonymous",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "J.T.",
      title: "Product Manager, A.I Startup",
    },
    {
      quote:
        "Great sense of humour, witty and full of wise words. Adrian has a give-and-take with advice, trading words and insight - leading to great outcomes. The team has grown since he joined and was sad to see him leave, but wherever he goes, the grass will always be greener.",
      name: "M.T",
      title: "Manager, Anonymous",
    },
    {
      quote:
        "Adrian has been an exceptional asset to our team. His dedication and work ethic are truly impressive, consistently going above and beyond to meet and exceed expectations. His creativity and problem-solving skills have been instrumental in overcoming challenges and driving our projects forward. Working with Adrian is a pleasure due to his professionalism and positive attitude. He brings energy and excellence to every task, making a significant impact on our team’s success.",
      name: "L.Y.P",
      title: "CHRO, Anonymous",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Bootcamp Graduate",
      desc: "Built projects with the React, Bootstrap and Redux stack - during and after bootcamp graduation.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Consultant",
      desc: "Top performer and award-winning consultant at an MNC Consultancy Agency.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Tax Associate",
      desc: "Joined the Big4 in Accounting in my first job, learning discipline and work-standard.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Freelance",
      desc: "Working and gaining experience wherever and whenever I can.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];