import { useRef, useState } from "react";
import {
  SDivider,
  SLayout,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SMain,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  StyledHeader,
} from "./styles";

import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";

import { Outlet, useLocation } from "react-router-dom";
import { logo } from "../../assets/icons";
import { useGetCurrentUser } from "../../network";
import { useSidebar } from "./useSidebar";

const Sidebar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const paths = pathname.split("/");
  const currentPage = paths[paths.length - 1];

  const { user } = useGetCurrentUser();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      if (searchRef.current) {
        searchRef.current.focus();
      }
    } else {
      // search functionality
    }
  };

  const { interns } = useSidebar();

  const linksArray = [
    {
      label: "Home",
      icon: <AiOutlineHome />,
      to: "/admin/dashboard",
      notification: 0,
    },
    {
      label: "Interns",
      icon: <MdOutlineAnalytics />,
      to: "/admin/interns",
      notification: interns.length,
    },
    {
      label: "Mentors",
      icon: <BsPeople />,
      to: "/admin/mentors",
      notification: 0,
    },
    {
      label: "Curriculum",
      icon: <AiOutlineApartment />,
      to: "/admin/curriculums",
      notification: 0,
    },
  ];

  const secondaryLinksArray = [
    {
      label: "Settings",
      icon: <AiOutlineSetting />,
      to: "/admin/settings",
    },
    {
      label: "Logout",
      icon: <MdLogout />,
      to: "/",
      onclick: () => {
        localStorage.clear();
      },
    },
  ];

  return (
    <SLayout>
      <SSidebar isOpen={sidebarOpen}>
        <>
          <SSidebarButton
            isOpen={sidebarOpen}
            onClick={() => setSidebarOpen((p) => !p)}
          >
            <AiOutlineLeft />
          </SSidebarButton>
        </>
        <SLogo isOpen={sidebarOpen}>
          <img src={logo} alt="logo" />
        </SLogo>
        <SSearch
          onClick={searchClickHandler}
          style={!sidebarOpen ? { width: `fit-content` } : {}}
        >
          <SSearchIcon>
            <AiOutlineSearch />
          </SSearchIcon>
          <input
            ref={searchRef}
            placeholder="Search"
            style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
          />
        </SSearch>
        <SDivider />
        {linksArray.map(({ icon, label, notification, to }) => (
          <SLinkContainer key={label} isActive={pathname === to}>
            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
              <SLinkIcon>{icon}</SLinkIcon>
              {sidebarOpen && (
                <>
                  <SLinkLabel>{label}</SLinkLabel>
                  {/* if notifications are at 0 or null, do not display */}
                  {!!notification && (
                    <SLinkNotification>{notification}</SLinkNotification>
                  )}
                </>
              )}
            </SLink>
          </SLinkContainer>
        ))}
        <SDivider />
        {secondaryLinksArray.map((item, _idx) => (
          <SLinkContainer key={item.label}>
            <SLink
              to={item.to}
              onClick={item?.onclick}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <SLinkIcon>{item.icon}</SLinkIcon>
              {sidebarOpen && <SLinkLabel>{item.label}</SLinkLabel>}
            </SLink>
          </SLinkContainer>
        ))}
      </SSidebar>
      <SMain isOpen={sidebarOpen}>
        <StyledHeader>
          <p>{currentPage}</p>
          <div className="admin">
            <small>{user.type ?? "Admin"}</small>
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="admin_img"
            />
          </div>
        </StyledHeader>
        <Outlet />
      </SMain>
    </SLayout>
  );
};

export default Sidebar;
