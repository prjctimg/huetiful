import {
    AppBar,
    Breadcrumbs,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    Divider,
    Link as MuiLink
} from '@mui/material';

import ColorBrewer from '../pages/color-brewer';
import { HiMenu, HiMenuAlt1, HiMenuAlt2, HiMoon, HiOutlineMenu, HiSearch } from 'react-icons/hi';

import Link from 'next/link';
import { useState } from 'react';
import { Stack } from '@mui/system';
import { BsBehance, BsGithub } from 'react-icons/bs';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <AppBar className="bg-white bg-blend-saturation text-black z-10">
                <header className="bg-white w-full h-8 block p-2 ">
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
                </header>
                <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} anchor="right">
                    <Box p={2} width="250px" textAlign={'center'} role="presentation">
                        <Typography
                            paddingBottom={2}
                            color="black"
                            fontWeight={'light'}
                            variant="h5"
                            fontFamily={'Dancing Script'}
                        >
                            Huetiful
                        </Typography>
                        <Stack direction="column" spacing={2} divider={<Divider flexItem />}>
                            <List>
                                <ListItem className="w-full h-4 hover:bg-slate-500">f</ListItem>
                                <ListItem> d</ListItem> <ListItem>e</ListItem>{' '}
                                <ListItem>g</ListItem>
                            </List>
                        </Stack>
                    </Box>
                </Drawer>
                <Toolbar>
                    <IconButton size="large" edge="start" onClick={() => setIsDrawerOpen(true)}>
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
                <Breadcrumbs aria-label="breadcrumbs" className="w-full px-4">
                    <MuiLink>
                        <Link href="/color-brewer">Color Functions</Link>
                    </MuiLink>
                    <MuiLink>
                        <Link href="/color-brewer">color-brewer</Link>
                    </MuiLink>
                </Breadcrumbs>{' '}
            </AppBar>
        </>
    );
}
