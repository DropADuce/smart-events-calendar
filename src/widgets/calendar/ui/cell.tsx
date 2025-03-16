import {Card} from "@mui/material";
import {PropsWithChildren} from "react";

interface ICellProps {
    visible?: boolean;
    elevation?: number;
}

export const Cell = ({ visible = true, elevation = 0,  children }: PropsWithChildren<ICellProps>) => {
    return (
        <Card
            elevation={elevation}
            sx={{
                minHeight: 80,
                ...(!visible && { opacity: 0 }),
            }}
        >
            {children}
        </Card>
    )
}