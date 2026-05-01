'use client'

import { DataTable } from "@/components/data-table";
import { getAllPurchaseItems } from "@/services/ajax-services";
import { useEffect } from "react";


export default function NewPurchasePage() {

  const fetchAllPurchaseItems = async () => { 
    const res =  await getAllPurchaseItems()
    console.log('All purchase items:', res)
  }

  useEffect(() => { 
    fetchAllPurchaseItems()
  },[])


	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Import Purchases</h1>
    <DataTable data={[]} />
		</div>
	);
}