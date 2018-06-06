const tournamentCardStyle = (theme: any) => ({
    root: {
        flexGrow: 1,
        marginTop: 80,
    },
    card: {
        direction: "row",
        marginBottom: '20px',
        maxWidth: 400,
        padding: theme.spacing.unit * 2,
        flex: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    }
});

export default tournamentCardStyle;