import Image from "next/image";

export default function CatalogCards({
  totalEunoia,
  dailyEunoia,
  totalSingel,
  dailySingel,
  totalCollabs,
  dailyCollabs,
  formatNumber,
}) {
  return (
    <>
        {/* CATALOG */}
        <h2 className="text-xl font-bold mb-4">
                Catalog Streams
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
                
                {/* EUNOIA */}
                <div className="
                    bg-zinc-900/60
                    backdrop-blur-xl
                    border
                    border-zinc-800
                    rounded-2xl
                    p-4 md:p-5
                    transition-all
                    duration-300
                    hover:border-blue-500
                    hover:shadow-xl
                    hover:shadow-blue-500/10
                ">
        
                    <div className="flex items-center gap-4">
        
                    <Image
                        src="/covers/eunoia.jpg"
                        alt="Eunoia"
                        width={72}
                        height={72}
                        className="
                        rounded-xl
                        border
                        border-zinc-700
                        shadow-lg
                        shrink-0
                        "
                    />
        
                    <div className="flex-1">
        
                        <p className="
                        text-zinc-500
                        uppercase
                        tracking-[2px]
                        text-xs
                        font-semibold
                        ">
                        Eunoia
                        </p>
        
                        <h2 className="text-2xl md:text-3xl font-black mt-1">
                        {formatNumber(totalEunoia)}
                        </h2>
        
                        <div className="
                        inline-flex
                        items-center
                        gap-2
                        mt-2
                        px-3
                        py-1.5
                        rounded-full
                        bg-blue-500/10
                        text-blue-400
                        text-xs
                        md:text-sm
                        font-medium
                        ">
                        🔥 {formatNumber(dailyEunoia)}
                        </div>
        
                    </div>
        
                    </div>
        
                </div>
        
                {/* SINGEL */}
                <div className="
                    bg-zinc-900/60
                    backdrop-blur-xl
                    border
                    border-zinc-800
                    rounded-2xl
                    p-4 md:p-5
                    transition-all
                    duration-300
                    hover:border-blue-500
                    hover:shadow-xl
                    hover:shadow-blue-500/10
                ">
        
                    <div className="flex items-center gap-4">
        
                    <Image
                        src="/covers/singel.jpg"
                        alt="Singel"
                        width={72}
                        height={72}
                        className="
                        rounded-xl
                        border
                        border-zinc-700
                        shadow-lg
                        shrink-0
                        "
                    />
        
                    <div className="flex-1">
        
                        <p className="
                        text-zinc-500
                        uppercase
                        tracking-[2px]
                        text-xs
                        font-semibold
                        ">
                        Singels
                        </p>
        
                        <h2 className="text-2xl md:text-3xl font-black mt-1">
                        {formatNumber(totalSingel)}
                        </h2>
        
                        <div className="
                        inline-flex
                        items-center
                        gap-2
                        mt-2
                        px-3
                        py-1.5
                        rounded-full
                        bg-blue-500/10
                        text-blue-400
                        text-xs
                        md:text-sm
                        font-medium
                        ">
                        🔥 {formatNumber(dailySingel)}
                        </div>
        
                    </div>
        
                    </div>
        
                </div>
        
                {/* COLLABS */}
                <div className="
                    bg-zinc-900/60
                    backdrop-blur-xl
                    border
                    border-zinc-800
                    rounded-2xl
                    p-4 md:p-5
                    transition-all
                    duration-300
                    hover:border-blue-500
                    hover:shadow-xl
                    hover:shadow-blue-500/10
                ">
        
                    <div className="flex items-center gap-4">
        
                    <Image
                        src="/covers/collab.jpg"
                        alt="Collaborations"
                        width={72}
                        height={72}
                        className="
                        rounded-xl
                        border
                        border-zinc-700
                        shadow-lg
                        shrink-0
                        "
                    />
        
                    <div className="flex-1">
        
                        <p className="
                        text-zinc-500
                        uppercase
                        tracking-[2px]
                        text-xs
                        font-semibold
                        ">
                        Collaborations
                        </p>
        
                        <h2 className="text-2xl md:text-3xl font-black mt-1">
                        {formatNumber(totalCollabs)}
                        </h2>
        
                        <div className="
                        inline-flex
                        items-center
                        gap-2
                        mt-2
                        px-3
                        py-1.5
                        rounded-full
                        bg-blue-500/10
                        text-blue-400
                        text-xs
                        md:text-sm
                        font-medium
                        ">
                        🔥 {formatNumber(dailyCollabs)}
                        </div>
        
                    </div>
        
                    </div>
        
                </div>
        
        </div>
    </>
  );
}