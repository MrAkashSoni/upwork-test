import React from 'react'

import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import Image from 'next/image'

interface DeckCardProps {
  title: string;
  description: string;
  url: string;
}


const DeckCard: React.FC<DeckCardProps> = ({ title, description, url }) => {
  return (
    <Card className=' flex items-center cursor-pointer'>
      <CardContent className='p-2 w-full'>
        <div className='flex flex-row'>
          <div className=' w-1/6  flex justify-center '>
            <Image
              alt='logo'
              src={url}
              height={40}
              width={50}
            />
          </div>
          <div className='px-3'>
            <CardTitle className='text-lg'>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardContent >
    </Card >
  )
}

export default DeckCard