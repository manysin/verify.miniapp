import { CircularProgress } from '@mui/material';

const LoadingScreen = () => {
    return (
        <div>
            <CircularProgress size={48} thickness={4} />
        </div>
    );
};

export default LoadingScreen;
