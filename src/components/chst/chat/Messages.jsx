import { useContext, useState   } from "react";
import { Box, styled } from "@mui/material";
import {AccountContext} from '../../../context/AccountProvider';

import { newMessage } from '../../../service/api';
//components
import Footer from "./Footer";

const Wrapper = styled(Box)`
    background-image: url(${'https://mcdn.wallpapersafari.com/medium/61/64/3QBHDv.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height:78vh;
    overflow-y:scroll;
`

const Messages = ({person , conversation}) =>{
    
    const [value, setValue] = useState('');

        const { account } =useContext(AccountContext);

    const sendText = async(e) =>{
        const code = e.keyCode || e.which;
        if(code ===13){
            let message ={
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type:'setValue',
                text: value
            }
           await newMessage(message);

           setValue('');
        }
    }

    return(
        <Wrapper>
            <Component>

            </Component>
            <Footer 
                sendText={sendText}
                setValue={setValue}
            />
        </Wrapper>
    )
}

export default Messages;

