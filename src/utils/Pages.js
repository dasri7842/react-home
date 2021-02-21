import { lazy } from "react";

export const pages = [
  {
    pageLink: "/",
    view: lazy(() => import("../components/Home")),
    displayName: "Home",
  },
  {
    pageLink: "/AboutUs",
    view: lazy(() => import("../components/AboutUs")),
    displayName: "About Us",
  },
  {
    pageLink: "/OurTutors",
    view: lazy(() => import("../components/OurTutors")),
    displayName: "Our Tutors",
  },
  {
    pageLink: "/BuyCourse",
    view: lazy(() => import("../components/BuyCourse")),
    displayName: "Buy a Course",
  },
  {
    pageLink: "/JoinAsTeacher",
    view: lazy(() => import("../components/JoinAsTeacher")),
    displayName: "Join as Teacher",
  },
  {
    pageLink: "/Blogs",
    view: lazy(() => import("../components/Blogs")),
    displayName: "Blogs",
  },
  {
    pageLink: "/Contact",
    view: lazy(() => import("../components/Contact")),
    displayName: "Contact",
  },
];
