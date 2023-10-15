import {CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import {Box, Button, CssBaseline, FormControl, FormLabel, Input, Link, Typography} from "@mui/joy";

export default function App() {
    return (
        <CssVarsProvider>
            <CssBaseline/>
            <Box display={'flex'} alignItems={'center'} height={'100vh'}
                 justifyContent={'center'} width={'100vh'}>
                <Sheet
                    sx={{
                        width: '300',
                        mx: 'auto', // margin left & right
                        my: 4, // margin top & bottom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                >
                    <div>
                        <Typography level="h4" component="h1">
                            Welcome!
                        </Typography>
                        <Typography level="body-sm">Sign in to continue.</Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            // html input attribute
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </FormControl>
                    <Button sx={{mt: 1 /* margin top */}}>
                        Log in
                    </Button>
                    <Typography
                        endDecorator={<Link href="/sign-up">Sign up</Link>}
                        fontSize="sm"
                        sx={{alignSelf: 'center'}}
                    >
                        Don't have an account?
                    </Typography>


                </Sheet>
            </Box>
        </CssVarsProvider>
    );
}