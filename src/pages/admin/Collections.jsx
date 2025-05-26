import React, { useState } from "react";
import ViewLayout from "@/components/admin/shared/ViewLayout";
import AdminDialogLayout from "@/components/admin/shared/AdminDialogLayout";
import CollectionForm from "@/components/admin/components/CollectionForm";

const Collections = () => {
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
      accessorKey: "collection",
      header: "Collection",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "items",
      header: "Items",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      id: "actions",
      header: "Actions",
    },
  ];

  return (
    <>
      <ViewLayout
        title="Collections"
        description="Manage LEGO collections for your lottery items."
        onAdd={handleAdd}
        columns={columns}
        data={[]}
      />

      <AdminDialogLayout
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Collection"
        description="Add a new collection to organize lottery items."
        onSubmit={handleSubmit}
        isEdit={!!editData}
      >
        <CollectionForm defaultValues={editData} />
      </AdminDialogLayout>
    </>
  );
};

export default Collections;
