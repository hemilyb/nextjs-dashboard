import { lusitana } from "../../ui/fonts";
import LatestInvoices from "../latest-invoices";
import {
  fetchCardData,
} from "../../lib/data";
import CardWrapper, { Card } from "../cards";
import { Suspense } from "react";
import { LatestInvoicesSkeleton, RevenueChartSkeleton, CardsSkeleton, } from "../../ui/skeletons";
import RevenueChart from "../revenue-chart";

 
export default async function Page() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main className="bg-primary p-4 rounded-2xl">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-gray-100`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton/>}>
          <CardWrapper/>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices/>
        </Suspense>
      </div>
    </main>
  );
}