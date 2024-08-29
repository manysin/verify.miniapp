import BarComponent from '@/components/BarComponent';
import { Box, Button } from '@mui/material';
import { useRouter } from "next/navigation";

const HomeScreen = () => {
    const router = useRouter()
    return (
        <>
            <BarComponent />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh'
                }}
            >
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                        <Button variant="contained" disableElevation sx={{ textTransform: 'none', width: "100%" }} size="large">
                            Camera
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            disableElevation
                            sx={{ textTransform: 'none', width: "100%" }}
                            size="large"
                            onClick={() => router.push('/verified')}
                        >
                            Upload Files
                        </Button>
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default HomeScreen;
