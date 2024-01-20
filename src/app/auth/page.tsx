'use client'
import { useMediaQuery } from "@mui/material";
import * as Styled from "./style";
import GoogleIconComponent from "@/components/icons/GoogleIcon";
import { useAuth } from "@/hooks/AuthContext";

function Auth() {
    const isMobileScreen = useMediaQuery("(max-width:1199px)");
    const { signInWithGoogle } = useAuth();
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Title>Bienvenido de nuevo</Styled.Title>
                <Styled.GoogleButton onClick={signInWithGoogle}>
                    {" "}
                    <GoogleIconComponent /> Continuar con Google
                </Styled.GoogleButton>
            </Styled.Content>
        </Styled.Container>
    );
}

export default Auth;