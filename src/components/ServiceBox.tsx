import React from "react";
import { Service } from "./data";
import styles from "./ServiceBox.module.css"
import { FaLongArrowAltRight } from "react-icons/fa";

interface ServiceBoxProps {
  item: Service;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ item }) => {
  return (
    <div className={`${styles.serviceBox}`}>
        <img src={item.imgsrc} alt="Sigma 6 Digital" className={`${styles.serviceImage}`} />
        <div className={`${styles.serviceBoxContent} position-relative`}>
            <h5 className={`${styles.serviceBoxName}`}>{item.name}</h5>
            <h3 className={`${styles.serviceBoxHeading}`}>{item.heading}</h3>
            <p className={`${styles.serviceBoxDescription}`}>{item.description}</p>
            <button className={`${styles.serviceBoxButton} position-relative d-flex align-items-center gap-2`}>{item.button} <FaLongArrowAltRight />
</button>
        </div>
    </div>
  );
};

export default ServiceBox;
