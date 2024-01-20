'use client'
import React from "react";
import Scanner from "./components/Scanner";
import * as Styled from "./style";
import NavBar from "../../components/NavBar/NavBar";

function RegisterProduct() {
    return (
        <Styled.Container>
            <h4>Registrar producto</h4>
            <Styled.Content>
                <Scanner />
            </Styled.Content>
            <NavBar />
        </Styled.Container>
    );
}

export default RegisterProduct;
