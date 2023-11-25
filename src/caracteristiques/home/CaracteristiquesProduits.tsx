'use client';

import { ProduitsCard } from '@/components/ProduitsCard'
import React, { CSSProperties } from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperNavButton } from '@/components/SwiperNavButton';
import { title } from 'process';
import { SectionHeading } from '@/components/SectionHeading';
import { Box } from '@chakra-ui/react';

const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "350px"
};

interface CaracteristiquesProduitsProps {
    title: string;
};

export const CaracteristiquesProduits = ({ title }: CaracteristiquesProduitsProps) => {
    const sliderSettings: SwiperOptions = {
        modules: [Navigation, Autoplay],
        spaceBetween: 10,
        slidesPerView: "auto",
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    }
    return (
        <Box w={{base: "100%", lg:"90%"}} mx={'auto'} p={'2rem'}>
            <SectionHeading title={title} />
            <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>

                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>

                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>

                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>

                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>
                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>

                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>

                <SwiperSlide style={slideStyles}>
                    <ProduitsCard />
                </SwiperSlide>

                <SwiperNavButton />
            </Swiper>
        </Box>
    )
}


