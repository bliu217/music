import {
  NavbarItem,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";

const Topics = () => {
  const topics = [
    {
      title: "Basics",
      subtopics: [
        "Staffs",
        "Time Signatures",
        "Notes",
        "Rests",
        "Dots",
        "Steps",
      ],
    },
    { title: "Rhythm", subtopics: [] },
    { title: "Keys", subtopics: [] },
    { title: "Intervals", subtopics: [] },
    { title: "Chords", subtopics: [] },
  ];

  return (
    <div className="flex h-screen border-r-1 border-t-1 border-black justify-end relative">
      <Navbar className="flex-col justify-start h-screen bg-inherit right-0 w-fit pr-5 pt-5">
        <NavbarContent className="px-0 flex-col justify-start items-start gap-0">
          {topics.map((topic) => (
            <>
              <NavbarItem className="my-4">
                <Link
                  href="#"
                  color="foreground"
                  className="font-bold uppercase text-3xl px-0"
                >
                  {topic.title}
                </Link>
              </NavbarItem>
              {topic.subtopics.map((title) => (
                <NavbarItem className="pl-5 pb-1">
                  <Link href="#" className="text-2xl text-dark-blue">
                    {title}
                  </Link>
                </NavbarItem>
              ))}
            </>
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Topics;
