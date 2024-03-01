import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Swap() {
    return (
        <div className="w-full h-full px-5 flex justify-center items-center text-gray-300">
            <div className="h-[400px] w-[500px] flex flex-col gap-1 relative">
                <div className="basis-1/6 flex justify-between items-center">
                    <div className='flex gap-10 items-center'>
                        <button className='px-3 py-1 rounded-xl bg-[#1b1b1b]'>Swap</button>
                        <button>Limit</button>
                        <button>Send</button>
                        <button>Buy</button>
                    </div>

                    <SettingsIcon/>
                </div>
                <div className="basis-1/3 rounded-xl bg-[#1b1b1b] p-3">
                    <h1>You pay</h1>
                </div>
                <div className="basis-1/3 rounded-xl bg-[#1b1b1b] p-3">
                    <h1>You receive</h1>
                </div>
                <button className="basis-1/6 bg-[#e3639e] w-full px-2 py-1 rounded-xl bg-opacity-40 text-[#e3639e]">Connect wallet</button>

                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-black p-1">
                    <div className='bg-[#1b1b1b] rounded-xl p-1'>
                        <ArrowDownwardIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}