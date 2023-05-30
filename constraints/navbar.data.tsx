export interface NavbarInterface {
  title: string;
  subheading: string;
  link: string;
}

const navbardata: NavbarInterface[] = [
  {
    title: "Find Doctor",
    link: "/",
    subheading: "Book an appointment",
  },
  {
    title: "Health Care",
    link: "/",
    subheading: "Request Health Care",
  },
  {
    title: "Blood Bank",
    link: "/",
    subheading: "Donate and Request Blood",
  },
  {
    title: "Blog",
    link: "/",
    subheading: "Medisha Blog",
  },
];
export default navbardata;
