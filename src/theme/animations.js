const animations = {
    '@keyframes fade-drop-in': {
        from: {
            opacity: 0,
            transform: 'translateY(-2rem)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    '@keyframes fade-glide-right-in': {
        from: {
            opacity: 0,
            transform: 'translateX(-2rem)',
        },
        to: {
            opacity: 1,
            transform: 'translateX(0)',
        },
    },
    '@keyframes fade-in': {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    },
    '@keyframes fade-out': {
        from: {
            opacity: 1,
        },
        to: {
            opacity: 0,
        },
    },
};

export default animations;
