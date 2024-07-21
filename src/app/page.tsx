import { CommandDialogDemo, UploadButton } from "../components";
import GridItem from "../components/gridItem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-800">
      {/* <CommandDialogDemo /> */}
      {/* <UploadButton /> */}
      <section className="flex min-h-full w-full flex-col items-center justify-center p-24 space-y-4 bg-gray-500">
        <div className="relative bg-white p-4 w-36 h-36"> 
        <GridItem className="absolute bg-gray-300 origin-center rotate-[24deg]" />
        <GridItem className="absolute bg-gray-300 origin-center rotate-12" />
        <GridItem className="absolute bg-gray-300 origin-center rotate-6" />
        <GridItem className="absolute bg-gray-300 origin-center " />
        </div>

      </section>



      <div className="grid grid-cols-6 gap-4 w-full bg-green-300">
          <GridItem className="bg-gray-300 w-[200px] h-[150px]" />
          <GridItem className="bg-gray-300 w-[200px] h-[150px]" />
          <GridItem className="bg-gray-300 w-[200px] h-[150px]" />
          <GridItem className="bg-gray-300 w-[200px] h-[150px]" />
          <GridItem className="bg-gray-300 w-[200px] h-[150px]" />
          <GridItem className="bg-gray-300 w-[200px] h-[150px]" />
        </div>
    </main>
  );
}
