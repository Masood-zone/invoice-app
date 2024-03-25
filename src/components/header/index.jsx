import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

function Header() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  const STATUS = [
    {
      id: 1,
      name: "Paid",
      value: "paid",
    },
    {
      id: 2,
      name: "Pending",
      value: "pending",
    },
    {
      id: 3,
      name: "Draft",
      value: "draft",
    },
  ];
  return (
    <div className="flex items-center justify-between w-full px-5 py-10">
      <div>
        <h1 className="text-4xl font-semibold pb-1">Invoices</h1>
        <p className="text-md">There are 7 total invoices</p>
      </div>
      <div className="w-max gap-10 p-2 flex items-center justify-between">
        {/* Select */}
        <div>
          <select
            className="bg-none py-2 px-2 font-medium"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="">Filter by status</option>
            {STATUS.map((status) => {
              return (
                <option key={status.id} value={status.value}>
                  {status.name}
                </option>
              );
            })}
          </select>
        </div>
        {/* Button */}
        <button className="flex bg-[#7C5DF9] text-white font-medium items-center text-md justify-center gap-2 py-2 px-2 rounded-full">
          <FaCirclePlus fontSize={40} />
          <span className="px-3 font-medium">New Invoice</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
