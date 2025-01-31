import { motion } from "framer-motion";
import { FaBolt, FaClock } from "react-icons/fa";

export default function BlackFridayBanner({ sale }) {
    if (sale?.status !== "active") return null;

    const pulseAnimation = {
        scale: [1, 1.02, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="relative bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden">
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 opacity-20 blur-xl" />

            <div className="relative p-3">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                    <motion.div 
                        className="flex items-center gap-1.5"
                        animate={pulseAnimation}
                    >
                        <FaBolt className="text-yellow-500 text-sm" />
                        <span className="text-yellow-500 font-bold uppercase tracking-wider text-xs">
                            {sale.name}
                        </span>
                    </motion.div>
                </div>

                {/* Discount */}
                <div className="text-center mb-2">
                    <motion.div
                        className="text-2xl font-bold"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {sale.discountPercentage}% OFF
                    </motion.div>
                    <p className="text-gray-300 text-xs">
                        {sale.description}
                    </p>
                </div>

                {/* Timer */}
                <div className="flex items-center justify-center gap-1.5 text-gray-400">
                    <FaClock />
                    <span>
                        Valid from {new Date(sale.validFrom).toLocaleDateString()} to{" "}
                        {new Date(sale.validUntil).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
}