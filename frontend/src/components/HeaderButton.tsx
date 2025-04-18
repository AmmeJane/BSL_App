import React from "react";
import { Link, useLocation } from "react-router-dom";

type buttonParams = {
    name: string;
    path: string;
};

const HeaderButton: React.FC<buttonParams> = ({ name,path }) => {
    const location = useLocation();
    const isActive = () => location.pathname === path || (path === "" && location.pathname === "/");

    return (
            <Link 
                className={`p-4 ${isActive() ? 'text-text' : 'text-darkertext'}`} 
                to={path}
            >
                <p className="h-full w-full flex items-center justify-center">{name}</p>
            </Link>
    )
}


export default HeaderButton;