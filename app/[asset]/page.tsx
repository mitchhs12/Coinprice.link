import DetailedInfo from "@/components/AssetPage/DetailedInfo";
import ChartComponent from "@/components/AssetPage/ChartComponent";

export default function Page({ params }: { params: { asset: string } }) {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <main className="flex-col flex-grow justify-center items-center">
        <div className="flex justify-center">
          <ChartComponent asset={params.asset} />
        </div>
        <div className="border-2">
          <DetailedInfo />
        </div>
      </main>
    </div>
  );
}
