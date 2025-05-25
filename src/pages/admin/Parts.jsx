import React, { useState } from "react";
import ViewLayout from "@/components/admin/shared/ViewLayout";
import AddDialogLayout from "@/components/admin/shared/AddDialogLayout";
import PartForm from "@/components/admin/components/PartForm";

const Parts = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAdd = () => {
    setEditData(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", editData ? "edit" : "add");
    setIsDialogOpen(false);
  };

  const columns = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt={row.original.name}
          className="h-12 w-12 object-cover rounded"
        />
      ),
    },
    {
      accessorKey: "details",
      header: "Part Details",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "color",
      header: "Color",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      id: "actions",
      header: "Actions",
    },
  ];

  return (
    <>
      <ViewLayout
        title="Parts"
        description="Manage LEGO parts inventory and details."
        onAdd={handleAdd}
        columns={columns}
        data={[]}
      />

      <AddDialogLayout
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Part"
        description="Add a new part to the inventory."
        onSubmit={handleSubmit}
        isEdit={!!editData}
      >
        <PartForm defaultValues={editData} />
      </AddDialogLayout>
    </>
  );
};

export default Parts;
