import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const VerifiedScreen = () => {
    return (
        <>
            <Box
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '32px', fontWeight: 'bold', color: "#2E7D32", display: 'flex',
                        justifyContent: 'center', marginTop: "32px"
                    }}
                >
                    ឃ្យូ.អ.កូដ ស្ដង់ដា ត្រឹមត្រូវ
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '16px', fontWeight: 'semibold', display: 'flex',
                        justifyContent: 'center', marginTop: "12px"
                    }}
                >
                    ចេញដោយ សាកលវិទ្យាល័យការពារជាតិ
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                        width: '100%',
                    }}
                >
                    <Image
                        src="/certificate.jfif"
                        alt="Verify Logo"
                        width={1400}
                        height={100}
                        priority
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </Box>

            </Box>
        </>
    );
};

export default VerifiedScreen;