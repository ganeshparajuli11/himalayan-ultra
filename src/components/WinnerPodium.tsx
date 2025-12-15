
import { motion } from 'framer-motion';

interface WinnerProps {
    winners: any[];
}

export default function WinnerPodium({ winners }: WinnerProps) {
    if (!winners || winners.length < 3) return null;

    // Display order: 2nd (Left), 1st (Center), 3rd (Right)
    const displayOrder = [winners[1], winners[0], winners[2]];

    const podiumVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                type: 'spring' as const,
                stiffness: 100,
                damping: 15
            }
        })
    };

    const getRankStyles = (rank: number) => {
        if (rank === 1) return {
            height: 'h-[18rem] md:h-[24rem]',
            borderColor: 'border-primary',
            badgeColor: 'bg-primary text-black',
            shadow: 'shadow-[0_0_40px_rgba(22,163,74,0.3)]',
            titleColor: 'text-primary',
            scale: 'scale-100 md:scale-105 z-20',
            imgBorder: 'border-primary'
        };
        if (rank === 2) return {
            height: 'h-[16rem] md:h-[20rem]',
            borderColor: 'border-gray-500',
            badgeColor: 'bg-gray-300 text-black',
            shadow: 'shadow-xl',
            titleColor: 'text-gray-200',
            scale: 'scale-100 z-10 md:mt-6',
            imgBorder: 'border-gray-300'
        };
        return {
            height: 'h-[15rem] md:h-[19rem]',
            borderColor: 'border-[#cd7f32]',
            badgeColor: 'bg-[#cd7f32] text-black',
            shadow: 'shadow-xl',
            titleColor: 'text-[#cd7f32]',
            scale: 'scale-95 z-0 md:mt-10',
            imgBorder: 'border-[#cd7f32]'
        };
    };

    return (
        <div className="flex flex-row items-end justify-center gap-2 md:gap-6 mt-4 md:mt-8 mb-4 md:mb-8 px-2 md:px-4 w-full max-w-5xl mx-auto">
            {displayOrder.map((winner, index) => {
                if (!winner) return null;
                const rank = index === 1 ? 1 : index === 0 ? 2 : 3;
                const styles = getRankStyles(rank);

                // Map names to image files we generated
                let imgSrc = "/runner_guo_min.png"; // Default fallback
                if (winner.name.includes("Guo Min")) imgSrc = "/runner_guo_min.png";
                else if (winner.name.includes("Tom Joly")) imgSrc = "/runner_tom_joly.png";
                else if (winner.name.includes("Tyler Green")) imgSrc = "/runner_tyler_green.png";

                return (
                    <motion.div
                        key={winner?.no || index}
                        custom={rank === 1 ? 1 : rank === 2 ? 0 : 2}
                        initial="hidden"
                        animate="visible"
                        variants={podiumVariants}
                        className={`relative flex flex-col items-center w-1/3 max-w-[280px]`}
                    >
                        {/* Avatar Section - Floating above */}
                        <div className={`relative z-30 -mb-8 md:-mb-12 w-full flex justify-center`}>
                            <div className={`
                                rounded-full border-2 md:border-4 ${styles.imgBorder} bg-[#15151e]
                                flex items-center justify-center overflow-hidden shadow-2xl relative
                                ${rank === 1 ? 'w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40' : 'w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32'}
                            `}>
                                <img src={imgSrc} alt={winner.name} className="w-full h-full object-cover" />
                            </div>
                            {/* Rank Badge */}
                            <div className={`
                                absolute -bottom-2 md:-bottom-3 z-40 w-5 h-5 md:w-8 md:h-8 rounded-full ${styles.badgeColor}
                                flex items-center justify-center font-black text-[10px] md:text-sm border-2 border-[#1e1e2d] shadow-md
                            `}>
                                {rank}
                            </div>
                        </div>

                        {/* Main Card */}
                        <div className={`
                            w-full bg-[#1e1e2d] rounded-xl md:rounded-2xl border md:border-2 ${styles.borderColor}
                            ${styles.height} ${styles.shadow} ${styles.scale}
                            relative flex flex-col justify-end pb-3 md:pb-6 px-2 md:px-4 overflow-hidden
                        `}>
                            {/* Background Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                            {/* Content */}
                            <div className="text-center relative z-20 mt-6 md:mt-12 mb-auto pt-2 md:pt-4">
                                <h3 className={`font-black uppercase tracking-wider truncate mb-1 ${styles.titleColor} ${rank === 1 ? 'text-xs sm:text-sm md:text-xl' : 'text-[10px] sm:text-xs md:text-lg'}`}>
                                    {winner.name}
                                </h3>
                                <p className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-white/5 inline-block px-1.5 md:px-2 py-0.5 rounded-full mb-2 md:mb-3">
                                    {winner.team}
                                </p>

                                <div className="hidden md:grid grid-cols-2 gap-2 mt-1 px-2">
                                    <div className="bg-black/40 rounded p-1.5 backdrop-blur-sm">
                                        <div className="text-[9px] text-gray-500 uppercase font-bold">STM</div>
                                        <div className="text-xs font-bold text-white">98</div>
                                    </div>
                                    <div className="bg-black/40 rounded p-1.5 backdrop-blur-sm">
                                        <div className="text-[9px] text-gray-500 uppercase font-bold">PACE</div>
                                        <div className="text-xs font-bold text-white">95</div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="relative z-20 space-y-1 md:space-y-2 font-mono text-[10px] md:text-xs border-t border-white/5 pt-2 md:pt-3">
                                <div className="hidden sm:flex justify-between items-center">
                                    <span className="text-gray-500 font-bold uppercase text-[8px] md:text-[10px]">CP</span>
                                    <span className="text-primary font-bold text-[10px] md:text-xs">{winner.cp}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 font-bold uppercase text-[8px] md:text-[10px]">Time</span>
                                    <span className={`font-bold text-white ${rank === 1 ? 'text-[10px] sm:text-sm md:text-lg' : 'text-[10px] sm:text-xs md:text-base'}`}>{winner.time}</span>
                                </div>
                                <div className="flex justify-between items-center bg-white/5 p-1 md:p-2 rounded-lg mt-1">
                                    <span className="text-gray-500 font-bold uppercase text-[8px] md:text-[10px]">Pts</span>
                                    <span className={`text-sm md:text-xl font-black ${styles.titleColor}`}>{winner.pts}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
