import { LinearProgress, Stack } from '@mui/material';
import Image from 'next/image';

const LoadingScreen = () => {
    return (
        <Stack>
            <Image
                src="/verify-logo.svg"
                alt="Verify Logo"
                width={200}
                height={200}
                priority
            />
            <LinearProgress />
        </Stack>
    );
};

export default LoadingScreen;
