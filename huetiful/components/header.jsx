import {
    AppBar,
    Breadcrumbs,
    IconButton,
    Toolbar,
    Typography,
    Container,
    Drawer,
    List,
    ListItem,
    Divider,
    Link as MuiLink,
    ListItemText,
    ListItemIcon,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';

import ColorBrewer from '../pages/color-brewer';
import { HiOutlineMenu, HiSearch } from 'react-icons/hi';

import Link from 'next/link';
import { useState } from 'react';
import { Stack } from '@mui/system';
import { BsAlarm, BsBehance, BsGithub, BsInfoCircle, BsMailbox, BsPalette } from 'react-icons/bs';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <AppBar className="bg-white bg-blend-saturation text-black mb-24">
                <div className="bg-white w-full h-8 block p-2 ">
                    <Typography
                        color={'black'}
                        fontFamily={'Dancing Script'}
                        textAlign="center"
                        paddingX={4}
                        fontWeight={'light'}
                        variant="h5"
                    >
                        Huetiful
                    </Typography>
                </div>
                <Drawer
                    className="bg-current backdrop-blur-sm "
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    anchor="top"
                >
                    <Container
                        component="div"
                        className=" backdrop-blur-sm  w-full h-full"
                    >
                        <Typography
                            paddingBottom={2}
                            color="black"
                            fontWeight="light"
                            variant="h5"
                            fontFamily="Dancing Script"
                        >
                            Huetiful
                        </Typography>

                        <List>
                            <ListItem>
                                <Accordion>
                                    <AccordionSummary>
                                        <ListItemIcon className="pt-4">
                                            <BsInfoCircle />
                                        </ListItemIcon>
                                        <ListItemText secondary="Discovering ways to effectively use color in user interface design.">
                                            Guides
                                        </ListItemText>{' '}
                                    </AccordionSummary>
                                </Accordion>
                            </ListItem>

                            <Divider />

                            <ListItem>
                                <Accordion>
                                    <AccordionSummary>
                                        <ListItemIcon className="pt-4">
                                            <BsPalette />
                                        </ListItemIcon>
                                        <ListItemText secondary="Create aesthetically balanced collections of colors.">
                                            Palette Generator
                                        </ListItemText>
                                    </AccordionSummary>
                                    <AccordionDetails></AccordionDetails>
                                </Accordion>
                                <Divider />
                            </ListItem>

                            <Divider />

                            <ListItem>
                                <Accordion>
                                    <AccordionSummary>
                                        <ListItemIcon className="pt-4">
                                            <BsPalette />
                                        </ListItemIcon>

                                        <ListItemText secondary="Outline of section contents">
                                            3
                                        </ListItemText>
                                    </AccordionSummary>
                                    <AccordionDetails></AccordionDetails>
                                </Accordion>
                            </ListItem>
                        </List>
                    </Container>
                </Drawer>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <HiOutlineMenu />
                    </IconButton>

                    <div className="flex w-full justify-end">
                        <IconButton>
                            <HiSearch />
                        </IconButton>

                        <IconButton>
                            <BsBehance />
                        </IconButton>

                        <IconButton>
                            <BsGithub />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}
