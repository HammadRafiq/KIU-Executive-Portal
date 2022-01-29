import React from "react";
import Logo from "../assets/kiu_logo.png";
import TopNavigation from "./TopNavigation";
import HomeIcon from "../assets/icons/home.png";
import GraduateIcon from "../assets/icons/graduation-cap.png";
import GraduationIcon from "../assets/icons/student-graduation.png";
import AcademicIcon from "../assets/icons/spell-check.png";
import EmailIcon from "../assets/icons/email.png";
import { InertiaLink } from "@inertiajs/inertia-react";
import clsx from "clsx";
import useNavBarScrollAnimate from "./../Hooks/useNavBarScrollAnimate";

function Index({ children, title, currentPage }) {
    // custom hook for navbar scroll animation
    const { showBG } = useNavBarScrollAnimate();

    const staticSidebarTabsData = [
        {
            name: "All Colleges",
            image: HomeIcon,
            url: "/dashboard",
            key: 0
        },
        {
            name: "English College",
            image: GraduationIcon,
            url: "/english-college",
            key: 1,
        },
        {
            name: "Arabic College",
            image: GraduateIcon,
            url: "/dashboard",
            key: 2,
        },
        {
            name: "French College",
            image: AcademicIcon,
            url: "/dashboard",
            key: 3,
        },
        {
            name: "Urdu College",
            image: EmailIcon, url: "/dashboard",
            key: 4
        },
        
    ];

    return (
        <div>
            <meta name="viewport" content="width=1280,initial-scale=1"></meta>
            {
                // primary sidebar
            }
            <nav className="primary-sidebar">
                <div className="logo-container">
                    <img src={Logo} className="Logo" alt="logo" />
                </div>

                <ul>
                    {staticSidebarTabsData.map((item, index) => (
                        <li
                            key={index}
                            className={clsx(currentPage === index && "active")}
                        >
                            <InertiaLink preserveState={true} href={item.url}>
                                {item.name}
                            </InertiaLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex-1">
                {
                    //Top header of every component
                }
                <div
                    className={clsx(
                        "top-navigation ",
                        showBG > 0 && "scroll-active"
                    )}
                >
                    <TopNavigation
                        currentPage={currentPage}
                        title={title}
                        url="/student/profile"
                    />
                </div>

                {
                    // main content of every component
                }
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Index;
