import Table from "@/components/collection/table";
import WalletBox from "@/components/wallet/walletBox";
import Link from "next/link";
const HomePage=()=> {
  return (
    <main className=" bg-black desktop:px-40 pb-18 px-2 h-svh min-h-fit pt-5">
      <h1 className="text-2xl font-semibold text-white mb-6">
        Collections
      </h1>
      <Table />
      <div className="flex justify-center items-center mt-10">
      <Link href="/#" className=' py-[10px] px-[50px] text-white font-bold rounded-md bg-[#0054FA]'>View All Collections</Link>
      </div>
    </main>
  );
}

export default HomePage;