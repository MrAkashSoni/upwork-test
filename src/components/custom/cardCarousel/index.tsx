import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import FlashCard from '../flashCard'


interface Props {
  data: any[];
}

const CardCarousel: React.FC<Props> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(data?.length || 0);

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const goToNextSlide = () => {
    if (api) {
      api.scrollNext();
    }
  };

  const goToPreviousSlide = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const isFirstCard = current === 1;
  const isLastCard = current === count;

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {data?.length && data?.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <FlashCard data={item} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-6 text-center text-sm text-muted-foreground">
        <span>
          <div className={`inline-block mr-3 h-7 w-7 border rounded-full border-slate-950   ${isFirstCard ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200'}`} onClick={goToPreviousSlide} >
            <img src='/left-arrow.png' className={`inline-block mt-[2px] h-4 w-4`} />
          </div>
          Slide {current} of {count}
          <div className={`inline-block ml-3 h-7 w-7 border rounded-full border-slate-950 ${isLastCard ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200'}`} onClick={goToNextSlide} >
            <img src='/right-arrow.png' className={`inline-block mt-[2px] h-4 w-4 `} />
          </div>
        </span>
      </div>
    </div>
  )
}

export default CardCarousel

