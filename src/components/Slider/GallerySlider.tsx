import React, { FC, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import SlideArrow from './elements/SlideArrow';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import './styles/swiper-pagination.css';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { sliderFullViewBtnStyles } from './styles/sliderStyles';

const images: string[] = [
  '/products/product-preview/1.jpg',
  '/products/product-preview/2.jpg',
  '/products/product-preview/3.jpg',
  '/products/product-preview/2.jpg',
];

interface GallerySliderProps {
  direction?: 'vertical' | 'horizontal';
  showTotalSlides?: boolean;
}

const GallerySlider: FC<GallerySliderProps> = ({
  direction = 'vertical',
  showTotalSlides,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isHorizontal = direction === 'horizontal';

  const renderSwiperThumbnail = (
    <div className={cn('flex', !isHorizontal && 'flex-cols')}>
      <Swiper
        onSwiper={setThumbsSwiper}
        direction={direction}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="w-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="max-h-[75px] lg:max-h-[161px] !w-auto"
          >
            <Image
              fill
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={cn(
                '!relative max-h-[161px] md:min-w-[60px] md:max-h-[80px] lg:max-h-[161px] h-full object-cover cursor-pointer',
                activeIndex === index
                  ? 'opacity-100'
                  : 'opacity-60 hover:opacity-100',
                activeIndex === index && 'border border-primary-50'
              )}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div>
      {showTotalSlides && (
        <div className="flex items-center justify-center text-sm font-extralight text-black-100 mb-2">
          <span className="mr-1">{activeIndex + 1}</span>/
          <span className="ml-1">{images.length}</span>
        </div>
      )}
      <div className={cn('flex gap-2', isHorizontal && 'flex-cols')}>
        {/* Thumbnails */}
        {direction === 'vertical' && renderSwiperThumbnail}

        {/* Main Slider */}
        <div className="relative gallery-slider w-full">
          <Swiper
            rewind={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs, Pagination]}
            onSlideChange={(swiper: SwiperCore) => {
              setActiveIndex(swiper.activeIndex);
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="!w-full !max-w-full">
                <Image
                  fill
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="!relative w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden lg:flex">
            <SlideArrow
              className="left-[5%]"
              icon="la-angle-left !text-white text-[30px] group-hover:!text-primary"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <SlideArrow
              className="right-[5%]"
              icon="la-angle-right text-[30px] !text-white group-hover:!text-primary"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>

          <div className={sliderFullViewBtnStyles}>
            <i className="las la-expand-arrows-alt text-xl"></i>
          </div>
        </div>

        {/* Thumbnails */}
        {direction === 'horizontal' && renderSwiperThumbnail}
      </div>
    </div>
  );
};

export default GallerySlider;
