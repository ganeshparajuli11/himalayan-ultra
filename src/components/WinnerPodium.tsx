
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
                delay: i * 0.2,
                duration: 0.8,
                type: 'spring' as const,
                bounce: 0.4
            }
        })
    };

    const getRankStyles = (rank: number) => {
        if (rank === 1) return {
            // Rank 1: Pink/Primary - Elevated
            card: 'h-[420px] md:h-[500px] border-primary shadow-[0_0_50px_rgba(255,143,163,0.4)]',
            avatarSize: 'w-32 h-32 md:w-48 md:h-48 border-primary',
            badge: 'bg-primary text-black',
            textColor: 'text-primary',
            scale: 'scale-110 z-20',
            subText: 'text-pink-200'
        };
        if (rank === 2) return {
            // Rank 2: Silver/Slate - Left
            card: 'h-[380px] md:h-[450px] border-slate-400 shadow-[0_0_30px_rgba(148,163,184,0.3)]',
            avatarSize: 'w-24 h-24 md:w-36 md:h-36 border-slate-400',
            badge: 'bg-slate-200 text-black',
            textColor: 'text-slate-200',
            scale: 'scale-100 z-10 mt-12',
            subText: 'text-slate-400'
        };
        return {
            // Rank 3: Gold/Amber - Right
            card: 'h-[360px] md:h-[430px] border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.3)]',
            avatarSize: 'w-24 h-24 md:w-36 md:h-36 border-amber-500',
            badge: 'bg-amber-500 text-black',
            textColor: 'text-amber-500',
            scale: 'scale-95 z-0 mt-16',
            subText: 'text-amber-200/80'
        };
    };

    return (
        <div className="flex flex-row items-end justify-center gap-4 md:gap-8 mt-12 mb-12 w-full max-w-6xl mx-auto px-4 perspective-1000">
            {displayOrder.map((winner, index) => {
                if (!winner) return null;
                const rank = index === 1 ? 1 : index === 0 ? 2 : 3;
                const styles = getRankStyles(rank);

                // Placeholder images based on names or generic defaults
                let imgSrc = "/runner_default.png";
                if (winner.name.includes("Guo Min")) imgSrc = "/runner_guo_min.png";
                else if (winner.name.includes("Tom Joly")) imgSrc = "/runner_tom_joly.png";
                else if (winner.name.includes("Tyler Green")) imgSrc = "/runner_tyler_green.png";

                return (
                    <motion.div
                        key={winner?.no || index}
                        custom={rank === 1 ? 1 : rank === 2 ? 0 : 2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={podiumVariants}
                        className={`relative flex flex-col items-center w-full max-w-[320px] group ${styles.scale}`}
                    >
                        {/* Avatar Section - Floating above */}
                        <div className={`relative z-30 -mb-16 md:-mb-24 flex flex-col items-center`}>
                            <div className={`
                                rounded-full border-4 bg-[#15151e]
                                flex items-center justify-center overflow-hidden shadow-2xl relative
                                ${styles.avatarSize} transition-transform duration-500 group-hover:scale-105
                            `}>
                                <img src={imgSrc} alt={winner.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Rank Badge */}
                            <div className={`
                                absolute -bottom-3 z-40 w-8 h-8 md:w-10 md:h-10 rounded-full ${styles.badge}
                                flex items-center justify-center font-black text-sm md:text-lg border-4 border-[#1e1e2d] shadow-lg
                            `}>
                                {rank}
                            </div>
                        </div>

                        {/* Main Card */}
                        <div className={`
                            w-full bg-[#1b1b26] rounded-[2rem] border-2
                            ${styles.card}
                            relative flex flex-col pt-20 md:pt-28 pb-6 px-4 md:px-6 overflow-hidden
                            transition-all duration-300 hover:-translate-y-2
                        `}>
                            {/* Card Header */}
                            <div className="text-center mb-6">
                                <h3 className={`font-black uppercase tracking-wider text-lg md:text-2xl mb-2 ${styles.textColor}`}>
                                    {winner.name}
                                </h3>
                                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full ${styles.subText}`}>
                                    {winner.team}
                                </span>
                            </div>

                            {/* Stats Grid - Mid Section */}
                            <div className="grid grid-cols-2 gap-3 mb-auto px-2">
                                <div className="bg-black/30 rounded-xl p-2 md:p-3 text-center backdrop-blur-sm border border-white/5">
                                    <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-black tracking-wider mb-1">STM</div>
                                    <div className="text-sm md:text-lg font-bold text-white">98</div>
                                </div>
                                <div className="bg-black/30 rounded-xl p-2 md:p-3 text-center backdrop-blur-sm border border-white/5">
                                    <div className="text-[9px] md:text-[10px] text-gray-500 uppercase font-black tracking-wider mb-1">RACE</div>
                                    <div className="text-sm md:text-lg font-bold text-white">95</div>
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="space-y-3 font-mono text-xs md:text-sm border-t border-white/5 pt-4 mt-4">
                                <div className="flex justify-between items-center group/stat">
                                    <span className="text-gray-500 font-bold uppercase text-[10px]">Checkpoint</span>
                                    <span className={`${styles.textColor} font-bold`}>{winner.cp || 'Finish'}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 font-bold uppercase text-[10px]">Time</span>
                                    <span className="text-white font-bold tracking-wide">{winner.time}</span>
                                </div>

                                {/* Points Highlight */}
                                <div className={`flex justify-between items-center bg-white/5 p-3 rounded-xl mt-2 border border-white/5`}>
                                    <span className="text-gray-400 font-bold uppercase text-[10px]">Points</span>
                                    <span className={`text-xl md:text-2xl font-black ${styles.textColor}`}>{winner.pts}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
