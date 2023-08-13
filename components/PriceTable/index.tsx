import { CryptoCurrencyFeeds } from "@/utils/ContractRepository/Ethereum/Contracts";
import PriceTableData from "@/components/PriceTableData";

export default function PriceTable() {
    return (
        <div>
            <div className="flex items-center justify-center lg:gap-10">
                <div className="flex items-center justify-start w-2/12 lg:w-1/12 text-xs lg:text-lg">Image</div>
                <div className="flex items-center justify-start w-2/12 lg:w-1/12 text-xs lg:text-lg">Symbol</div>
                <div className="flex items-center justify-start w-2/12 lg:w-1/12 text-xs lg:text-lg">Name</div>
                <div className="flex items-center justify-end w-4/12 lg:w-2/12 text-xs lg:text-lg">Price (USD)</div>
            </div>
            {Object.entries(CryptoCurrencyFeeds).map(([symbol, { name, address }]) => (
                <PriceTableData key={symbol} name={name} symbol={symbol} contractAddress={address} />
            ))}
        </div>
    );
}
