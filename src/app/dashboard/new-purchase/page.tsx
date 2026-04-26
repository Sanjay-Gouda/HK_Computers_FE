

'use client';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewPurchasePage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    itemName: "",
    serialNumber: "",
    purchaseDate: "",
    purchasePrice: "",
    quantity: "",
    totalCost: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!", form);
    // Handle form submission logic here
    // alert("Form submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="w-full mx-auto p-8 bg-white rounded-lg shadow mx-8 m-8">
      <h1 className="text-2xl font-bold mb-6 text-center">New Purchase</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
            <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
            <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="mobileNo">Mobile No</label>
            <Input id="mobileNo" name="mobileNo" value={form.mobileNo} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email Id</label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="itemName">Item Name</label>
            <Input id="itemName" name="itemName" value={form.itemName} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="modelNumber">Model Number</label>
            <Input id="serialNumber" name="serialNumber" value={form.serialNumber} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="purchaseDate">Purchase Date</label>
            <Input id="purchaseDate" name="purchaseDate" type="date" value={form.purchaseDate} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="purchasePrice">Purchase Price</label>
            <Input id="purchasePrice" name="purchasePrice" type="number" value={form.purchasePrice} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="quantity">Quantity</label>
            <Input id="quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="totalCost">Total Cost</label>
            <Input id="totalCost" name="totalCost" type="number" value={form.totalCost} onChange={handleChange} required />
          </div>
        </div>

        <div className="flex justify-end">
        <Button type="submit" className="mt-6 ">Submit</Button>
        </div>
      </form>
    </div>
  );
}
