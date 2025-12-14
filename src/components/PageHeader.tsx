import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

const PageHeader = ({ title, subtitle, bgImage = '/inner-bg.png' }: PageHeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.overlay}></div>
            <img
                src={bgImage}
                alt="Background"
                className={styles.bgImage}
                style={{ objectFit: 'cover' }}
            />
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
