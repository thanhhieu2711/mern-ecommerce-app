import { Toaster } from 'react-hot-toast';
import { toastConfig } from '@/configs/toastConfig';
const Toast = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={toastConfig}
        />
    );
};

export default Toast;
