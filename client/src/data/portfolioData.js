
import { FaReact, FaNodeJs, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiGraphql, SiNextdotjs, SiDotnet, SiPostgresql } from 'react-icons/si';

export const portfolioData = {
  hero: {
    name: "Darji Shyam",
    titles: ["Full Stack Developer", "Java Developer", "Python Developer", "Creative Coder"],
    description: "Building digital experiences that blend aesthetic perfection with robust engineering.",
    socials: {
      github: "https://github.com/darjishyam",
      linkedin: "https://www.linkedin.com/in/shyam-darji",
      whatsapp: "https://wa.me/916355094295",
      email: "mailto:shyamdarji1604@gmail.com"
    }
  },
  projects: [
    {
      id: 0,
      title: "QuickBlog",
      description: "A comprehensive blog management system where admins manage posts and moderation. Users can create content, like, comment, and report inappropriate content.",
      summary: "QuickBlog is a sophisticated MERN stack application designed for dynamic content management. It features a robust multi-role authentication system that distinguishes between Admins, Writers, and regular Users. The platform empowers writers with a rich-text editing experience, while admins benefit from a powerful moderation suite to maintain community standards. Real-time interactions like instant commenting and sentiment-aware reporting ensure a safe and engaging environment for all users.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Mongoose"],
      image: "/quickblog_thumbnail.png",
      links: {
        demo: "https://quickblog-frontend-nine.vercel.app/",
        github: "#"
      },
      features: [
        "Admin Dashboard for managing posts and users",
        "Content moderation tools (approve/reject logs)",
        "User interactions: Likes, Comments, and Reporting",
        "Role-based authentication (Admin/User/Writer)",
        "Rich text editor for content creation",
        "Responsive design for all devices"
      ]
    },
    {
      id: 1,
      title: "ChefSync Partner Portal",
      description: "A specialized management portal for restaurant partners to oversee orders, manage menus, and track business growth in real-time.",
      summary: "This application empowers restaurant owners with a comprehensive digital storefront. It features a real-time order queue that synchronizes with the customer and driver apps, automated status updates, and a dynamic menu management system. Designed for high-pressure kitchen environments, the UI prioritizes speed and clarity, ensuring zero missed orders and efficient kitchen-to-driver handoffs.",
      tags: ["React Native", "Node.js", "Socket.io", "MongoDB", "Express"],
      image: "/swiggy/restaurant/Firstpage(resturant).png",
      gallery: [
        "/swiggy/restaurant/Firstpage(resturant).png",
        "/swiggy/restaurant/Resturant(orderreceive).png",
        "/swiggy/restaurant/resturant(preparingfood).png",
        "/swiggy/restaurant/Resturant(order Ready).png",
        "/swiggy/restaurant/Resturant(food).png",
        "/swiggy/restaurant/Resturantfood.png",
        "/swiggy/restaurant/Resutrant(profil).png",
        "/swiggy/restaurant/Resturant(editprofile).png",
        "/swiggy/restaurant/Resturant(bannerrequest).png",
        "/swiggy/restaurant/login(resturant).png",
        "/swiggy/restaurant/signup(resturant).png",
        "/swiggy/restaurant/otp(resturant).png"
      ],
      links: {
        demo: "https://youtu.be/_FzwTYuOQBI",
        github: "#"
      },
      features: [
        "Real-time order notifications and queue management",
        "Dynamic menu control (price updates, item availability)",
        "Automated status sync with customer and delivery apps",
        "Business analytics dashboard for revenue tracking",
        "Interactive profile and banner request management"
      ]
    },
    {
      id: 2,
      title: "FleetMotion Delivery App",
      description: "A high-performance mobile tool for delivery partners, optimized for real-time navigation, proximity routing, and order fulfillment.",
      summary: "Built for speed and reliability, the Delivery Partner app acts as the vital link in the food delivery chain. It utilizes Google Maps API for optimized route calculation and Socket.io for instant proximity-based order dispatching. The app manages the entire lifecycle of a delivery—from accepting a request to restaurant pickup and final doorstep delivery—ensuring transparency for both the customer and the platform.",
      tags: ["React Native", "Google Maps API", "Socket.io", "Geolocation"],
      image: "/swiggy/driver/Driver(profile).png",
      gallery: [
        "/swiggy/driver/Driver(profile).png",
        "/swiggy/driver/Driver(neworder).png",
        "/swiggy/driver/Driver(orderaccepted).png",
        "/swiggy/driver/Driver(rderpickup).png",
        "/swiggy/driver/Driver(orderdelivered).png",
        "/swiggy/driver/Driver(history).png",
        "/swiggy/driver/Driver(Places).png",
        "/swiggy/driver/Driver(bankdetails).png",
        "/swiggy/driver/Driver(vehicledetails).png",
        "/swiggy/driver/Driver(documentupload).png",
        "/swiggy/driver/Driver(waitingforapprove).png",
        "/swiggy/driver/driverrating.png"
      ],
      links: {
        demo: "https://youtu.be/_FzwTYuOQBI",
        github: "#"
      },
      features: [
        "Proximity-based intelligent order dispatching",
        "Live turn-by-turn navigation via Google Maps",
        "Earnings tracking and detailed delivery history",
        "Document verification and onboarding flow",
        "Real-time status updates broadcasted to customers"
      ]
    },
    {
      id: 3,
      title: "Nexus Systemic Control Center",
      description: "A powerful, systemic command center for managing the entire food delivery ecosystem, from user moderation to financial oversight.",
      summary: "The Admin Console is the 'brain' of the platform. It provides a god-eye view of all ongoing operations, allowing admins to approve restaurants, manage delivery partners, moderate users, and oversee financial transactions. With a focus on data visualization and systemic control, it handles complex tasks like banner assignments, coupon management, and dispute resolution across all three sibling applications.",
      tags: ["React", "Express", "MongoDB", "Data Visualization", "Admin Panels"],
      image: "/swiggy/admin/admin(dashboard).png",
      gallery: [
        "/swiggy/admin/admin(dashboard).png",
        "/swiggy/admin/Admin(users).png",
        "/swiggy/admin/admin(driverdetails).png",
        "/swiggy/admin/admin(resturantdetials).png",
        "/swiggy/admin/admin(approveresturant).png",
        "/swiggy/admin/admin(approvedriver).png",
        "/swiggy/admin/admin(suspendResturants).png",
        "/swiggy/admin/admin(suspendDriver).png",
        "/swiggy/admin/admin(income).png",
        "/swiggy/admin/admin(orderstatus).png",
        "/swiggy/admin/admin(categories).png",
        "/swiggy/admin/admin(coupans).png",
        "/swiggy/admin/admin(bannerrequest).png",
        "/swiggy/admin/admin(activebanner).png"
      ],
      links: {
        demo: "https://youtu.be/_FzwTYuOQBI",
        github: "#"
      },
      features: [
        "Global dashboard for real-time system monitoring",
        "User, Restaurant, and Driver lifecycle management",
        "Financial reporting and earning distribution oversight",
        "Dynamic marketing tools (Banners, Coupons, Categories)",
        "Systemic moderation and security controls"
      ]
    },
    {
      id: 4,
      title: "FoodieGo Consumer Platform",
      description: "A feature-rich consumer application providing a seamless experience for food ordering, grocery shopping, and real-time delivery tracking.",
      summary: "This is the flagship consumer app of the ecosystem. It offers a highly interactive UI for browsing thousands of restaurants and grocery stores. Key technical highlights include a sophisticated search system, real-time proximity-based restaurant listing, and a live order tracking interface that keeps users informed at every step. The app also integrates secure payment gateways and a robust address management system for effortless ordering.",
      tags: ["React Native", "Socket.io", "Stripe", "Redux", "Google Maps"],
      image: "/swiggy/customer/HomePage.png",
      gallery: [
        "/swiggy/customer/HomePage.png",
        "/swiggy/customer/particularFood.png",
        "/swiggy/customer/cartfood.png",
        "/swiggy/customer/groceryfood.png",
        "/swiggy/customer/filtering(veg).png",
        "/swiggy/customer/filtering(nonveg).png",
        "/swiggy/customer/Payment.png",
        "/swiggy/customer/payment(pin).png",
        "/swiggy/customer/ordertracking.png",
        "/swiggy/customer/checkstatus.png",
        "/swiggy/customer/orderhistory.png",
        "/swiggy/customer/useraddress.png",
        "/swiggy/customer/foodrating.png",
        "/swiggy/customer/login.png",
        "/swiggy/customer/signup.png",
        "/swiggy/customer/OtpVerify.png"
      ],
      links: {
        demo: "https://youtu.be/_FzwTYuOQBI",
        github: "https://github.com/darjishyam/freshdrop"
      },
      features: [
        "Advanced proximity-based restaurant and grocery searching",
        "Real-time order tracking with live map updates",
        "Multi-vendor cart and secure multi-method checkout",
        "Personalized user profiles and address bookmarking",
        "Interactive ratings and reviews for food and delivery"
      ]
    },
    {
      id: 5,
      title: "Apex Logistics Ecosystem",
      description: "A comprehensive overview of the entire 4-app ecosystem, synchronizing Customer, Restaurant, Driver, and Admin roles in real-time.",
      summary: "This project showcases the technical complexity of building a distributed, real-time ecosystem. It involves the architectural orchestration of four distinct specialized apps connected through a central Node.js backend. The system solves complex logistical problems such as real-time proximity dispatching, live synchronization of order states across all platforms using WebSockets (Socket.io), and high-availability data management with MongoDB. It stands as a testament to building scalable, production-ready full-stack mobile systems.",
      tags: ["System Architecture", "Microservices", "WebSockets", "Full-Stack Mobile"],
      image: "/swiggy/customer/HomePage.png",
      gallery: [
        "/swiggy/customer/HomePage.png",
        "/swiggy/restaurant/Firstpage(resturant).png",
        "/swiggy/driver/Driver(profile).png",
        "/swiggy/admin/admin(dashboard).png"
      ],
      links: {
        demo: "https://youtu.be/_FzwTYuOQBI",
        github: "#"
      },
      features: [
        "Architecture of 4 specialized interconnected applications",
        "Core Node.js backend handling distributed state sync",
        "Real-time WebSocket communication layer for zero-latency updates",
        "Scalable database schema for complex multi-user interactions",
        "Cross-platform consistency and shared design language"
      ]
    }
  ],
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <FaReact />, percentage: 95, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, percentage: 92, color: "#000000" },
        { name: "HTML5", icon: <FaHtml5 />, percentage: 98, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, percentage: 95, color: "#1572B6" },
        { name: "TypeScript", icon: <SiTypescript />, percentage: 85, color: "#3178C6" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, percentage: 90, color: "#339933" },
        { name: "GraphQL", icon: <SiGraphql />, percentage: 85, color: "#E10098" },
        { name: "Docker", icon: <FaDocker />, percentage: 70, color: "#2496ED" },
        { name: ".NET Core", icon: <SiDotnet />, percentage: 80, color: "#512BD4" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb />, percentage: 88, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 82, color: "#336791" },
        { name: "SQL", icon: <FaDatabase />, percentage: 85, color: "#F29111" }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava />, percentage: 85, color: "#007396" },
        { name: "Python", icon: <FaPython />, percentage: 80, color: "#3776AB" },
        { name: "C#", icon: <FaCode />, percentage: 78, color: "#239120" }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "Senior Frontend Engineer",
      company: "TechNova Inc.",
      duration: "2023 - Present",
      description: "Leading the frontend architecture for the core SaaS platform, improving performance by 40%."
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Creative Solutions",
      duration: "2021 - 2023",
      description: "Developed and maintained multiple client projects, ranging from e-commerce sites to internal tools."
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "StartUp Hub",
      duration: "2020 - 2021",
      description: "Collaborated with designers to implement pixel-perfect UIs and interactive components."
    }
  ],
  hobbies: [
    { name: "Cricket", description: "Passionate about cricket, enjoying both playing and analyzing the game's strategies.", icon: "🏏" },
    { name: "Mathematics", description: "Exploring the elegance of numbers, logic, and solving complex problems.", icon: "📐" },
    { name: "Gaming", description: "Exploring immersive worlds in RPGs and strategy games.", icon: "🎮" },
    { name: "Traveling", description: "Experiencing new cultures and cuisines.", icon: "✈️" }
  ],
  contact: {
    email: "shyamdarji1604@gmail.com",
    phone: "+91 6355094295",
    location: "Gujarat, India"
  }
};
