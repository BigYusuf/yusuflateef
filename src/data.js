
export const list = [
    {id: "web", title:"Web App"},
    {id: "api", title:" API"},
    {id: "gis", title:"GIS / Mapping"},
];

export const option1 = [
    {id: 0, value: "", title:"Select Stacks"},
    {id: 1, value: "React JS", title:"React JS"},
    {id: 2, value: "Next JS", title:"Next JS"},
    {id: 3, value: "Tailwind CSS", title:"Tailwind CSS"},
    {id: 4, value: "MongoDB", title:"MongoDB"},
    {id: 5, value: "FireBase", title:"Firebase"},
    {id: 6, value: "Sanity CMS", title:"Sanity CMS"},
    {id: 7, value: "Node JS", title:"Node JS"},
    {id: 8, value: "Markdown", title:"Markdown"},
];
export const option2 = [
    {id: 0, value: "", title:"Select Tools"},
    {id: 1, value: "Chrome", title:"Chrome Browser"},
    {id: 2, value: "Git/ Github", title:"Git/ Github"},
    {id: 3, value: "Postman", title:"Postman"},
    {id: 4, value: "Redux", title:"Redux"},
    {id: 5, value: "Context API", title:"Context API"},
    {id: 6, value: "Jest", title:"Jest"},
    {id: 7, value: "Profiler", title:"Profiler"},
    {id: 8, value: "VS Code", title:"VS Code"},
];

export const webData = [
    { id: 1, img: "/image/ademotor1.png", title: "Ademotor Car Dealers",
    frontend:"React JS and CSS",
    backend:"Node, Express, MongoDB, Firebase, NodeMailer, Paypal etc",
    desc: "This Ecommerce website for selling cars",
    images:[{img1:"/image/ademotor1.png"}, {img1:"/image/productpage.png"}, {img1:"/image/allProducts.png"}, {img1:"/image/popularcars.png"}],
    demo:'https://car-shop-ademoto.herokuapp.com/',
    github:'https://github.com/BigYusuf/Ademotor-cars',
    design:'MS Excel, MS word, sketch drawing on paper',
    blog:'http://yusuflateefblog.vercel.app/Ademotor',
},
    { id: 2, img: "/image/blog.png", title: "BigYusuf Blog",
    frontend:"Next JS, TypeScript, Tailwind CSS",
    backend:"Sanity",
    desc: "This is my personal blog, where I describe my journey as developer, describe all my open source projects and my experience with them",
    images:[{img1:"/image/blog.png"}, {img1:"/image/blog-post1.png"}, {img1:"/image/blog-comment.png"}, {img1:"/image/blog-sanity.png"}],
    demo:'http://yusuflateefblog.vercel.app/',
    github:'https://github.com/BigYusuf/yusuflateefblog',
    design:'MS Excel, sketch drawing on paper',
    blog:'http://yusuflateefblog.vercel.app/getting-started',
},
{ id: 3, img: "/image/blue-tesla1.png", title: "Blue Tesla ",
    frontend:"React JS, Styled-Components",
    backend:"Firebase 9",
    desc: "Responsive and interesting Tesla Clone powered with firebase authetication with fully functioning login ang sign up pages. Manage using redux state management tool",
    images:[{img1:"/image/blue-tesla1.png"}, {img1:"/image/tesla-register.png"}, {img1:"/image/tesla-account.png"}, {img1:"/image/blue-tesla.png",}],
    demo:'https://tesla-clone-49069.web.app/',
    github:'https://github.com/BigYusuf/tesla-clone',
    design:'MS Excel, sketch drawing on paper',
    blog:'',
},
];

export const APIData = [
    { id: 4, img: "/image/jobs-api.png", title: "JOBS API",
    frontend:"HTML",
    backend:"Node, Express, MongoDB, Postman, Swagger UI",
    desc: "This is an API which show cases Jobs and users",
    images:[{img1:"/image/jobs-api.png"},  ],
    demo:'https://simple-job-api.herokuapp.com/',
    github:'https://github.com/BigYusuf/simple-jobs-api',
    blog:'',
},
];

export const gisData = [
    { id: 56, img: "/image/webGIS.png", title: "GIS geojson to Leaflet-Map",
    frontend:"HTML, Native CSS",
    backend:"QGIS Geojson",
    desc: "3 in 1 project Combo. This dashboard comprises of different GIS related projects. First all process are done using QGIS and then converted geojson to a leaflet Map",
    images:[{img1:"/image/webGIS.png"}, {img1:"/image/nigstates.png"}, {img1:"/image/covdash.png"}, {img1:"/image/covid-dash.png"},],
    demo:'https://gis-maps-bigyusuf.vercel.app/',
    github:'https://github.com/BigYusuf/GISmaps-',
    blog:'',
},
];

export const NavbarData1 = [
     { id: "home", titleRef: "#home", icon: "bx bx-home-alt"},
     { id: "about", titleRef: "#about", icon: "bx bx-user"},
     { id: "skills", titleRef: "#skills", icon: "bx bx-book"},
     { id: "work", titleRef: "#work", icon: "bx bx-briefcase-alt-2"},
     { id: "contact", titleRef: "#contact", icon: "bx bx-message-square-detail"},
];

export const NavbarData2 = [
     { id: 19, titleRef: "", icon: "bx bx-home-alt"},
     { id: 20, titleRef: "/", icon: "bx bx-log-out"}
];

export const serviceModalData = [
     { id: 24, title1: "Product", title2: "Designer"},
     { id: 25, title1: "UI/UX", title2: "Designer"},
     { id: 26, title1: "Visual", title2: "Designer"},    
];

export const Data1 = [
    { id: 24, title1: "Product", title2: "Designer", 
    description:"Service with more than 3 years of experience. Providing quality work to clients and companies",
    li1: "I develop the user interface",
    li2: "I develop the user interface",
    li3: "Design and mockups of products for companies",
    },
];
export const Data2 = [
    { id: 25, title1: "UI/UX", title2: "Designer", 
    description:"Service with more than 3 years of experience. Providing quality work to clients and companies",
    li1: "I develop the user interface",
    li2: "I develop the user interface",
    li3: "Design and mockups of products for companies",
    },
];
export const Data3 = [
    { id: 26, title1: "Visual", title2: "Designer", 
    description:"Service with more than 3 years of experience. Providing quality work to clients and companies",
    li1: "I develop the user interface",
    li2: "I develop the user interface",
    li3: "Design and mockups of products for companies",
    },
];

export const TestimonialData =[
    { 
        id: 1, name: "Gabriel Adefolaju", img: "/image/tes1.png",
        desc: 'A really good job, all aspects of the project were followed step by step and with good results.',
    },
    { 
        id: 2, name: "Endurance Ogbeide", img: "/image/tes2.png",
        desc: 'Very considerate guy. Thanks for all the help.',
    },
    { 
        id: 3, name: "Halimat Olabisi", img: "/image/tes3.jpg",
        desc: 'Always wonderful. Looking forward to working with your next semester.',
    },
    { 
        id: 4, name: "Marvel", img: "/image/pic-4.png",
        desc: 'The only reason I like your work is because you take your time to listen to what i have to say and do my work how i want them.',
    },

]

export const MainModalData =[
    {
        id: 1, title: " Voice Control", logo: "bx bx-microphone",
        desc: 'Use the Microphone button to control website. You can perform task like',
        l1: 'Navigation: Go home/ scroll to top/ contact',
        l2: 'Interaction: Tell me about Yusuf/ switch background',
        l3: 'conversation like AI portfolio',
    },
    {
        id: 2, title: " Project Manager", logo: "bx bx-book",
        desc: 'Click the Demo Login Button to access this page. You can perform task like',
        l1: 'Add Project to portfolio (database)',
        l2: 'Edit and manage Project: ',
        l3: 'Delete Project from database',
    },
    {
        id: 3, title: " Login", logo: "bx bx-user",
        desc: 'In order to have access to the admin control, Click the Demo Login Button to access the special dropdown. You can perform task like',
        l1: 'Manage all testimonials',
        l2: 'project Manager ',
        l3: 'Full control of web app',
    },
    {
        id: 4, title: " Portfolio Manager", logo: "bx bx-data",
        desc: 'Total Access to manage web app without any limitation. Login in, select portfolio manager from dropdown. Perform task like',
        l1: 'manage services',
        l2: 'manage skill, about me',
        l3: 'Edit links e.g. facebook, email etc',
    },

]
export const imgData = [
    { id: 1, img: "/image/car-1.png", title: "Web design"},
    { id: 2, img: "/image/car-4.png", title: "Web design"},
    { id: 3, img: "/image/car-5.png", title: "Web design"},
    { id: 4, img: "/image/car-2.png", title: "Web design"},
];