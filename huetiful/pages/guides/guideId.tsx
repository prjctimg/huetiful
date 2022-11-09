import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from '@mui/material';
import { Stack } from '@mui/system';
import { BsBank } from 'react-icons/bs';

export default function GuideId() {
    return (
        <Grid columnSpacing={2} rowSpacing={2} container>
            <Grid item xs={12} sm={12} md={8} lg={6}>
                <Card>
                    <CardContent>
                        <Card>
                            <Typography paddingBottom={1} variant="h5" fontWeight="regular">
                                The Blog title.
                            </Typography>
                            <Typography variant="subtitle2" color={'gray'} component="section">
                                In this guide:
                                <List>
                                    <ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BsBank />
                                            </ListItemIcon>
                                            <ListItemText>Intro</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BsBank />
                                            </ListItemIcon>
                                            <ListItemText>Intro</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BsBank />
                                            </ListItemIcon>
                                            <ListItemText>Intro</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <BsBank />
                                            </ListItemIcon>
                                            <ListItemText>Intro</ListItemText>
                                        </ListItem>
                                    </ListItem>
                                </List>
                            </Typography>
                        </Card>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <Card className="bg-white">
                    <Stack direction="column" spacing={0.5}>
                        <Typography
                            guttterbottom
                            paddingTop={2}
                            paddingLeft={2}
                            variant="h6"
                            fontWeight="bold"
                        >
                            Up next:
                        </Typography>
                        <Card elavation={0}>
                            <CardContent>
                                <Typography gutterBottom variant="title">
                                    Title of guide
                                </Typography>
                                <Typography variant="body2">
                                    This is the description for the post
                                </Typography>
                            </CardContent>
                        </Card>
                        <Divider />
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="title">
                                    Title of guide
                                </Typography>
                                <Typography variant="body2">
                                    This is the description for the post
                                </Typography>
                            </CardContent>
                        </Card>
                        <Divider />
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="title">
                                    Title of guide
                                </Typography>
                                <Typography variant="body2">
                                    This is the description for the post
                                </Typography>
                            </CardContent>
                        </Card>
                        <Divider />
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="title">
                                    Title of guide
                                </Typography>
                                <Typography variant="body2">
                                    This is the description for the post
                                </Typography>
                            </CardContent>
                        </Card>
                        <Divider />
                    </Stack>
                </Card>
            </Grid>
        </Grid>
    );
}
