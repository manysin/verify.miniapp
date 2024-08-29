import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const VerifiedScreen = () => {
    return (
        <>
            <iframe src="https://dev.verifykh.com/verify/?isVerifyApp=true" frameborder="0"></iframe>
        </>
    );
};

export default VerifiedScreen;