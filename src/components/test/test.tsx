import { Avatar } from "@mui/material"
import { makeStyles } from "@mui/styles"
import * as React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/free-mode";
import { Mousewheel, FreeMode, } from "swiper";

import 'swiper/css';
import { FreeModeOptions } from "swiper/types";

const style = makeStyles({
    container: {
        border: "1px solid black",
        width: "10vw",
        height: "80vh",
        position: "absolute",
        right: 0,
        top: "10vh",
        overflow: "hidden"
    },
    item: {
        // border: "1px solid red",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",

        transition: "all .25s",
        "&>div": {
            height: "4em",
            width: "4em",
            transition: "all .25s",
            marginRight: "1em",
        },
        "&>.active": {
            transition: "all .25s",
            marginRight: "7em",
            background: "red"
        }

    },
    full: {
        justifySelf: "center",
    },
    marginable: {
        marginRight: "5em !important"
    }
})
const Test = () => {
    const { item, marginable } = style()
    const [curentNR, setcurentNR] = React.useState("0")

    const fmo: FreeModeOptions = {
        momentum: false,
        enabled: true,
        sticky: true
    }

    return <div

        style={{
            background: "grey",
            overflow: "hidden",
            width: "100vw",
            height: "100vw",
            display: "flex",
            flexDirection: "row",
            boxSizing: "border-box",
            justifyContent: "space-between"
        }}
    >
        <div style={{ flex: .8 }} className="main">
            <h1 style={{
                width: "90%",
                height: "90%",
                textAlign: "center",
                lineHeight: "50vh",
                margin: "1em"
            }}>
                {curentNR}
            </h1>
        </div>
        <Swiper
            style={{ flex: .2 }}
            modules={[Mousewheel, FreeMode]}
            freeMode={fmo}
            mousewheel={true}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={20}
            centeredSlides={true}
            onSlideChange={(e) => {
                setcurentNR((e.activeIndex + 1) + "")
            }}
            onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(x => {
                return (
                    <SwiperSlide key={x} className={item}>
                        {(som) => (
                            <Avatar sx={{
                                boxShadow: 24
                            }} className={som.isActive ? 'active' :
                                som.isNext || som.isPrev ? marginable :
                                    ''
                            } >{x}</Avatar>
                        )
                        }
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div >


}

export default Test