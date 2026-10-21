import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const TABS = [
  { label: "All Projects", to: "/projects" },
  { label: "Graphic Design", to: "/projects/graphic-design" },
  { label: "Frontend Development", to: "/projects/frontend-development" },
];

export default function ProjectsTabs() {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-px md:flex md:flex-wrap md:items-center">
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `relative px-2 py-3 text-center text-xs font-semibold tracking-wide transition-colors sm:px-4 sm:text-sm md:text-left ${
                isActive ? "text-white" : "text-white/55 hover:text-white/80"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="projects-tab-underline"
                    initial={reduce ? false : false}
                    className="absolute left-0 right-0 -bottom-px h-0.5 bg-crg-purple"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}