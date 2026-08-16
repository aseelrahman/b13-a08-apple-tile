import { Spinner } from '@heroui/react';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Spinner className="animate-[spin_0.4s_linear_infinite] motion-reduce:animate-none" />
        </div>
    );
};

export default Loading;