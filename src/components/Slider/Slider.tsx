import React, { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.css';

interface SliderProps {
  className?: string;
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> & {
  Item: typeof SliderItem;
} = ({ className = '', children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalItems = React.Children.count(children);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollWidth * (currentIndex / totalItems),
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className={`${styles.sliderContainer} ${className}`}>

      <div className={`${styles.slider} ${className}`} ref={sliderRef}>
        {/* {children} */}
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, {
            isActive: index === currentIndex
          })
        )}
      </div>

      <footer className={styles.slideFooter}>

        <div className={styles.indicator}>
          {React.Children.map(children, (_, index) => (
            <span
              key={index}
              className={`${styles.bubble} ${currentIndex === index ? styles.active : ''
                }`}
            ></span>
          ))}
        </div>

        <div className={styles.buttons}>
          <button className={styles.prev} onClick={goToPrevious}>
            &#10094;
          </button>
          <button className={styles.next} onClick={goToNext}>
            &#10095;
          </button>
        </div>
      </footer>

    </div>
  );
};

interface SliderItemProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  isActive?: boolean;
}
const SliderItem: React.FC<SliderItemProps> = ({ children, isActive, ...props }) => {
  return (
    <div
      className={`${styles.itemSlider}  ${isActive ? styles.cardBordeActive : ''}`}
      {...props}
    >
      {children}
    </div>
  )
};
Slider.Item = SliderItem;

export default Slider;
