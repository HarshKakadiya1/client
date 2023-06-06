import { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon} from '@mui/icons-material';


import { AccountContext } from "../../../context/AccountProvider";

//components
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Componet = styled(Box)`
    height:44px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
`;
const Wrapper = styled(Box)`
    margin-left:auto;
    & > *{
        margin-left:2px;
        padding:8px;
        color:#000;
    };
    & :first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
    };
`

const Image = styled('img')({
    height:40,
    width:40,
    borderRadius: '50%'
})
const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);
    const toggleeDrawer = () =>{
        setOpenDrawer(true);
    }
    return(
        <>
            <Componet>
                <Image src={ account.picture} alt="dp" onClick={() =>toggleeDrawer()}/>
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
            </Componet>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}
export default Header;