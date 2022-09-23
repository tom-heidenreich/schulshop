import { useState } from 'react'
import { Text, Tooltip } from '@mantine/core'
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'tabler-icons-react';

export default function Link({ text, path, tooltip, external=false, ...props }) {

    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate()

    const link = (
        <Text
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => {
                if(path) {
                    if(!external) navigate(path)
                    else window.location.href = path
                }
            }}
            underline={isHover}
            style={{
                cursor: 'pointer',
            }}
            {...props}
        >
            {text}
        </Text>
    )

    if(tooltip) {
        return (
            <Tooltip
                label={<Text style={{display: 'flex', fontSize: '.8rem'}}>{tooltip}<ArrowUpRight size={15} style={{margin: 'auto 0'}} /></Text>}
                withArrow
            >
                {link}
            </Tooltip>
        )
    }

    return link;
}