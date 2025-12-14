
interface PageHeaderProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

const PageHeader = ({ title, subtitle, bgImage = '/inner-bg.png' }: PageHeaderProps) => {
    return (
        <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden mb-8">
            <div className="absolute inset-0 bg-[#050510]/60 z-10 transition-colors duration-300"></div>
            <img
                src={bgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75 transition-all duration-700 hover:scale-105"
            />
            <div className="container mx-auto px-4 relative z-20 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-primary font-bold tracking-widest uppercase mb-0 drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
