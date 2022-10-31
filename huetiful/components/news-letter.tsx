import { Button, Card, FormControl, Input, InputLabel, Typography } from "@mui/material";

export default function NewsLetter() {

    return (<>
        <Card>
            {/* Lead */}
            <Typography></Typography>

            {/* Supporting info. */}
            <Typography></Typography>

            {/* Email input */}


            <FormControl>
                <InputLabel>
                    <Input type="email" required />
                </InputLabel>
                <Button type='submit'>Subscribe</Button>
            </FormControl>

            {/* Disclaimer */}
            <Typography></Typography>
        </Card>

    </>)
}