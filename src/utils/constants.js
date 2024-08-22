import { IoCode, IoHomeSharp, IoSchool, IoNewspaperOutline } from "react-icons/io5";
import { SiTrendmicro,SiPodcastindex,SiYoutubegaming,SiLetsencrypt } from "react-icons/si";
import { FaCode,FaMusic } from "react-icons/fa6";
import { RiMovie2Line } from "react-icons/ri";
import { MdLiveTv,MdOutlineSportsCricket, MdSportsGymnastics,MdOutlineTheaterComedy } from "react-icons/md";
import React from "react";
export const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png'

export const icon ='w-[28px] h-[32px]'

export const catetogies = [
    {name:'New',icon:React.createElement(IoHomeSharp)},
    {name:'Trending',icon:React.createElement(SiTrendmicro)},
    {name:'ReactJs',icon:React.createElement(FaCode)},
    {name:'NextJs',icon:React.createElement(FaCode)},
    {name:'Education',icon:React.createElement(IoSchool)},
    {name:'Podcast',icon:React.createElement(SiPodcastindex)},
    {name:'Music',icon:React.createElement(FaMusic)},
    {name:'Movie',icon:React.createElement(RiMovie2Line)},
    {name:'Gaming',icon:React.createElement(SiYoutubegaming)},
    {name:'Live',icon:React.createElement(MdLiveTv)},
    {name:'Sports',icon:React.createElement(MdOutlineSportsCricket)},
    {name:'News',icon:React.createElement( IoNewspaperOutline)},
    {name:'Gym',icon:React.createElement(MdSportsGymnastics )},
    {name:'Comedy',icon:React.createElement(MdOutlineTheaterComedy)},
    {name:'Crypto',icon:React.createElement(SiLetsencrypt)}
]

export const { format } = Intl.NumberFormat('en-US',{
    notation:'compact',
    compactDisplay:'short'
})

export const channelLogo = 'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'