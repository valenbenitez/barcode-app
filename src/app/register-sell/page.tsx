'use client'
import React from "react";
import * as Styled from "./style";
import NavBar from "../../components/NavBar/NavBar";
import ScannerSell from "./components/Scanner";

function RegisterSell() {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.ItemContainer>
                    <Styled.Title>Nueva venta</Styled.Title>
                </Styled.ItemContainer>
                <ScannerSell />
            </Styled.Content>
            <NavBar />
        </Styled.Container>
    );
}

export default RegisterSell;
