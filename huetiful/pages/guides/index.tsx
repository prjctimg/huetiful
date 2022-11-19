import {
    Typography,
    Paper,
    Card,
    CardContent,
    Button,
    CardActions,
    Grid,
    CardMedia,
    Skeleton
} from '@mui/material';

export default function GuidesPage() {
    return (
        <Grid spacing={4} container className="bg-red-400">
            <Grid item xs={12} md={8} lg={6} paddingRight={2}>
                <Card component="div" className="w-full h-fit">
                    <CardContent>
                        <CardMedia className="w-full h-64">
                            <Skeleton variant="rectangle" />
                        </CardMedia>

                        <Typography
                            variant="subtitle2"
                            fontWeight={'regular'}
                            color="blue"
                            guttterBottom
                            gutterTop
                        >
                            Topic
                        </Typography>
                        <Typography gutterBottom variant="h5" fontWeight={'semibold'}>
                            Guides
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                            repudiandae, reprehenderit dolorem expedita id odit minus, quis illum
                            sequi quisquam impedit quod ipsam. Beatae nemo quaerat impedit
                            aspernatur rerum! Mollitia!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Read more</Button>
                        <Button size="small">Skip</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item>
                <Card component="div" className="w-64 h-fit">
                    <CardContent>
                        <Typography
                            variant="subtitle2"
                            fontWeight={'regular'}
                            color="blue"
                            guttterBottom
                            gutterTop
                        >
                            Topic
                        </Typography>
                        <Typography gutterBottom variant="h5" fontWeight={'semibold'}>
                            Guides
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                            repudiandae, reprehenderit dolorem expedita id odit minus, quis illum
                            sequi quisquam impedit quod ipsam. Beatae nemo quaerat impedit
                            aspernatur rerum! Mollitia!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Read more</Button>
                        <Button size="small">Skip</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item>
                <Card component="div" className="w-64 h-fit">
                    <CardContent>
                        <Typography
                            variant="subtitle2"
                            fontWeight={'regular'}
                            color="blue"
                            guttterBottom
                            gutterTop
                        >
                            Topic
                        </Typography>
                        <Typography gutterBottom variant="h5" fontWeight={'semibold'}>
                            Guides
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                            repudiandae, reprehenderit dolorem expedita id odit minus, quis illum
                            sequi quisquam impedit quod ipsam. Beatae nemo quaerat impedit
                            aspernatur rerum! Mollitia!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Read more</Button>
                        <Button size="small">Skip</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
