"use client";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

export default function Navbar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: '30ch',
            },
        },
    }));

    return (
        <div className="w-full h-[50px] bg-black flex items-center px-5">
            <div className="basis-1/3 flex gap-2 text-gray-500">
                <div>Swap</div>
                <div>Explore</div>
                <div>NFTs</div>
                <div>Pool <ExpandMoreIcon/></div>
            </div>

            <Search className="basis-1/3 rounded-xl">
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search tokens and NFT collections"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            
            <div className="basis-1/3 flex gap-2 justify-end">
                <div><ExpandMoreIcon/></div>
                <button className='bg-[#e3639e] px-2 py-1 rounded-xl bg-opacity-40 text-[#e3639e] font-bold'>Connect</button>
            </div>
        </div>
    )
}