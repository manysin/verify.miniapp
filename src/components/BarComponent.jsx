import { Box, AppBar, Toolbar, Button, Avatar } from '@mui/material';
import Image from 'next/image';

export default function BarComponent() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', }}>
            <AppBar position="static" sx={{ backgroundColor: '#ffffff', border: 'none', height: 'auto' }}>
                <Toolbar sx={{ height: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Image
                            src="/verify-logo.svg"
                            alt="Verify Logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </Box>
                    <Button color="inherit">
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
