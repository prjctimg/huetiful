import { Drawer } from "@mui/material";
import { useState } from "react";
import classNames from "classnames";


export default function SideNavbar() {


    const [isOpen, open] = useState(false)
    return (<>
        <Drawer onLoad={() => open(true)} className={classNames('w-64 h-64 bg-blue-900 ', { visible: isOpen, hidden: !isOpen })}>

        </Drawer>
    </>)
}