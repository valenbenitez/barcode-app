'use client'
import React from "react";
import * as Styled from "./style";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import { useRouter } from "next/navigation";

function NavBar() {
    const router = useRouter();

    function redirectTo(path) {
        router.push(path);
    }

    return (
        <Styled.NavBar>
            <Styled.Ul>
                <Styled.Li onClick={() => redirectTo("/register-product")}>
                    <CreateNewFolderRoundedIcon sx={{ color: "#000" }} /> <br />
                    <Styled.Label>Registrar</Styled.Label>
                </Styled.Li>
                <Styled.Li onClick={() => redirectTo("/dashboard")}>
                    <HomeRoundedIcon sx={{ color: "#000" }} /> <br />
                    <Styled.Label>Dashboard</Styled.Label>
                </Styled.Li>
                <Styled.Li onClick={() => redirectTo("/register-sell")}>
                    <QrCodeScannerRoundedIcon sx={{ color: "#000" }} /> <br />
                    <Styled.Label>Venta</Styled.Label>
                </Styled.Li>
            </Styled.Ul>
        </Styled.NavBar>
    );
}

export default NavBar;
