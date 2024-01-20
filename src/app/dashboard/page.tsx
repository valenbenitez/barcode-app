'use client'
import React from "react";
import * as Styled from "./style";
import NavBar from "../../components/NavBar/NavBar";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    return (
        <Styled.Container>
            <Styled.ItemContainer>
                <Styled.ColumnContainer>
                    <Styled.Subtitle>Total transaccionado</Styled.Subtitle>
                    <Styled.Title>$100.000</Styled.Title>
                </Styled.ColumnContainer>
                <Styled.RowContainer>
                    <Styled.Button onClick={() => router.push("/register-product")}>
                        <CreateNewFolderRoundedIcon />
                    </Styled.Button>
                    <Styled.Button onClick={() => router.push("/register-sell")}>
                        <QrCodeScannerRoundedIcon />
                    </Styled.Button>
                </Styled.RowContainer>
            </Styled.ItemContainer>
            <NavBar />
        </Styled.Container>
    );
}
