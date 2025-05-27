'use client';
import React, { useState } from 'react';

// toast
import toast from 'react-hot-toast';
// api
import * as api from 'src/services';
// usequery
import { useQuery } from 'react-query';
// mui
import { Dialog } from '@mui/material';
// components
import DeleteDialog from 'src/components/dialog/delete';
import Table from 'src/components/table/table';
import MaterialsCard from 'src/components/cards/materials';
import Material from 'src/components/table/rows/material';
// next
import { useSearchParams } from 'next/navigation';

const TABLE_HEAD = [
  { id: 'name', label: 'Materials', alignRight: false, sort: true },
  { id: 'description', label: 'Description', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'createdAt', label: 'Date', alignRight: false, sort: true },
  { id: '', label: 'Actions', alignRight: true }
];

export default function MaterialList() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const searchParam = searchParams.get('search');
  const [open, setOpen] = useState(false);
  const [apicall, setApicall] = useState(false);
  const [id, setId] = useState(null);

  const { data, isLoading, error } = useQuery(
    ['materials', apicall, searchParam, pageParam],
    () => api.getMaterials(+pageParam || 1, searchParam || ''),
    {
      onError: (err) => toast.error(err.response.data.message || 'Something went wrong!')
    }
  );

  const handleClickOpen = (prop) => () => {
    setId(prop);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth={'xs'}>
        <DeleteDialog
          onClose={handleClose}
          id={id}
          apicall={setApicall}
          endPoint="deleteMaterial"
          type={'Material deleted'}
          deleteMessage={
            'Are you sure you want to delete this material? Please consider carefully before making irreversible changes.'
          }
        />
      </Dialog>
      <Table
        headData={TABLE_HEAD}
        data={error ? [] : data}
        mobileRow={MaterialsCard}
        isLoading={isLoading}
        row={Material}
        handleClickOpen={handleClickOpen}
      />
    </>
  );
}
