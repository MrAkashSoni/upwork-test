import Image from 'next/image';
import styles from "./flashCard.module.css";


interface CardData {
  subHeader1: string;
  subHeader2: string;
}

interface Props {
  data: CardData;
}

const FlashCard: React.FC<Props> = ({ data }) => {


  return (
    <>
      <div className={styles['flip-box']}>
        <div className={styles['flip-box-inner']}>
          <div className={styles['flip-box-front']}>
            <Image fill sizes='100vw' src="/image.jpg" alt="Paris" />
          </div>
          <div className={styles['flip-box-back']}>
            <div className='flex items-start flex-col mb-2'>
              <h2 className='text-md'>Sub Header 1</h2>
              <div className='text-left'>
                <p className='text-sm overflow-hidden line-clamp-3'>{data?.subHeader1}</p>
              </div>
            </div>

            <div className='flex items-start flex-col'>
              <h2 className='text-md'>Sub Header 2</h2>
              <div className='text-left'>
                <p className='text-sm sm:overflow-visible overflow-hidden sm:line-clamp-none line-clamp-3'>{data?.subHeader2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FlashCard;
