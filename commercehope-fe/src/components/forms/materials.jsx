'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';

// mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import {
  Card,
  Stack,
  TextField,
  Typography,
  Box,
  Select,
  FormControl,
  FormHelperText,
  Grid,
  Skeleton
} from '@mui/material';
// api
import * as api from 'src/services';
// yup
import * as Yup from 'yup';
// axios
import axios from 'axios';
// toast
import toast from 'react-hot-toast';
// formik
import { Form, FormikProvider, useFormik } from 'formik';
import UploadSingleFile from 'src/components/upload/UploadSingleFile';
// next
import { useRouter } from 'next/navigation';

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  lineHeight: 2.5
}));

const STATUS_OPTIONS = ['active', 'deactive'];

export default function MaterialsForm({ data: currentMaterial, isLoading: materialLoading }) {
  const router = useRouter();

  const [state, setstate] = useState({
    loading: false,
    name: '',
    search: '',
    open: false
  });

  const { mutate, isLoading } = useMutation(
    currentMaterial ? 'update' : 'new',
    currentMaterial ? api.updateMaterial : api.addMaterial,
    {
      ...(currentMaterial && {
        enabled: Boolean(currentMaterial)
      }), 
      retry: false,
      onSuccess: (data) => {
        toast.success(data.message);
        router.push('/dashboard/material');
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      }
    }
  );
  const { mutate: deleteMutate } = useMutation(api.singleDeleteFile, {
    onError: (error) => {
      toast.error(error.response.data.message);
    }
  });
  const MaterialSchema = Yup.object().shape({
    name: Yup.string().required('Material name is required'),
    logo: Yup.mixed().required('Logo is required'),
    slug: Yup.string().required('Slug is required'),
    description: Yup.string().required('Description is required'),
    metaTitle: Yup.string().required('Meta title is required'),
    metaDescription: Yup.string().required('Meta description is required')
  });

  const formik = useFormik({
    initialValues: {
      name: currentMaterial?.name || '',
      metaTitle: currentMaterial?.metaTitle || '',
      logo: currentMaterial?.logo || null,
      description: currentMaterial?.description || '',
      metaDescription: currentMaterial?.metaDescription || '',
      file: currentMaterial?.logo || '',
      slug: currentMaterial?.slug || '',
      status: currentMaterial?.status || STATUS_OPTIONS[0]
    },
    enableReinitialize: true,
    validationSchema: MaterialSchema,
    onSubmit: async (values) => {
      const { ...rest } = values;
      try {
        mutate({
          ...rest,
          ...(currentMaterial && {
            currentSlug: currentMaterial.slug
          })
        });
      } catch (error) {
        console.error(error);
      }
    }
  });
  const { errors, values, touched, handleSubmit, setFieldValue, getFieldProps } = formik;

  const handleDrop = async (acceptedFiles) => {
    setstate({ ...state, loading: 2 });
    const file = acceptedFiles[0];
    if (file) {
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      });
    }
    setFieldValue('file', file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');
    const config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percentage = Math.floor((loaded * 100) / total);
        setstate({ ...state, loading: percentage });
      }
    };
    await axios
      .post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, formData, config)
      .then(({ data }) => {
        setFieldValue('logo', {
          _id: data.public_id,
          url: data.secure_url
        });
        setstate({ ...state, loading: false });
      })
      .then(() => {
        if (values.file) {
          deleteMutate(values.cover._id);
        }
        setstate({ ...state, loading: false });
      });
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]+/g, '')
      .replace(/\s+/g, '-'); // convert to lowercase, remove special characters, and replace spaces with hyphens
    formik.setFieldValue('slug', slug); // set the value of slug in the formik state
    formik.handleChange(event); // handle the change in formik
  };
  return (
    <Box position="relative">
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <div>
                    {materialLoading ? (
                      <Skeleton variant="text" width={140} />
                    ) : (
                      <LabelStyle component={'label'} htmlFor="material-name">
                        {' '}
                        {'Material Name'}{' '}
                      </LabelStyle>
                    )}
                    {materialLoading ? (
                      <Skeleton variant="rectangular" width="100%" height={56} />
                    ) : (
                      <TextField
                        id="material-name"
                        fullWidth
                        {...getFieldProps('name')}
                        onChange={handleTitleChange} // add onChange handler for title
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    )}
                  </div>
                  <div>
                    {materialLoading ? (
                      <Skeleton variant="text" width={100} />
                    ) : (
                      <LabelStyle component={'label'} htmlFor="material-meta-title">
                        {'Meta Title'}
                      </LabelStyle>
                    )}
                    {materialLoading ? (
                      <Skeleton variant="rectangular" width="100%" height={56} />
                    ) : (
                      <TextField
                        id="material-meta-title"
                        fullWidth
                        {...getFieldProps('metaTitle')}
                        error={Boolean(touched.metaTitle && errors.metaTitle)}
                        helperText={touched.metaTitle && errors.metaTitle}
                      />
                    )}
                  </div>
                  <div>
                    {materialLoading ? (
                      <Skeleton variant="text" width={70} />
                    ) : (
                      <LabelStyle component={'label'} htmlFor="material-slug">
                        {' '}
                        {'Slug'}
                      </LabelStyle>
                    )}
                    {materialLoading ? (
                      <Skeleton variant="rectangular" width="100%" height={56} />
                    ) : (
                      <TextField
                        fullWidth
                        id="material-slug"
                        {...getFieldProps('slug')}
                        error={Boolean(touched.slug && errors.slug)}
                        helperText={touched.slug && errors.slug}
                      />
                    )}
                  </div>
                  <div>
                    {materialLoading ? (
                      <Skeleton variant="text" width={100} />
                    ) : (
                      <LabelStyle component={'label'} htmlFor="material-description">
                        {' '}
                        {'Description'}{' '}
                      </LabelStyle>
                    )}
                    {materialLoading ? (
                      <Skeleton variant="rectangular" width="100%" height={240} />
                    ) : (
                      <TextField
                        fullWidth
                        id="material-description"
                        {...getFieldProps('description')}
                        error={Boolean(touched.description && errors.description)}
                        helperText={touched.description && errors.description}
                        rows={9}
                        multiline
                      />
                    )}
                  </div>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                style={{
                  position: '-webkit-sticky',
                  position: 'sticky',
                  top: 0
                }}
              >
                <Stack spacing={3}>
                  <Card sx={{ p: 3 }}>
                    <Stack spacing={3}>
                      <div>
                        {materialLoading ? (
                          <Skeleton variant="text" width={150} />
                        ) : (
                          <LabelStyle component={'label'} htmlFor="material-meta-description">
                            {' '}
                            {'Meta Description'}{' '}
                          </LabelStyle>
                        )}
                        {materialLoading ? (
                          <Skeleton variant="rectangular" width="100%" height={240} />
                        ) : (
                          <TextField
                            id="material-meta-description"
                            fullWidth
                            {...getFieldProps('metaDescription')}
                            error={Boolean(touched.metaDescription && errors.metaDescription)}
                            helperText={touched.metaDescription && errors.metaDescription}
                            rows={9}
                            multiline
                          />
                        )}
                      </div>

                      <div>
                        <Stack direction="row" justifyContent="space-between">
                          {materialLoading ? (
                            <Skeleton variant="text" width={150} />
                          ) : (
                            <LabelStyle variant="body1" component={'label'} color="text.primary">
                              Image
                            </LabelStyle>
                          )}
                          {materialLoading ? (
                            <Skeleton variant="text" width={150} />
                          ) : (
                            <LabelStyle component={'label'} htmlFor="material-image">
                              <span>512 * 512</span>
                            </LabelStyle>
                          )}
                        </Stack>

                        {materialLoading ? (
                          <Skeleton variant="rectangular" width="100%" height={225} />
                        ) : (
                          <UploadSingleFile
                            id="material-image"
                            file={values.logo}
                            onDrop={handleDrop}
                            error={Boolean(touched.logo && errors.logo)}
                            category
                            accept="image/*"
                            loading={state.loading}
                          />
                        )}
                        {touched.logo && errors.logo && (
                          <FormHelperText error sx={{ px: 2, mx: 0 }}>
                            {touched.logo && errors.logo}
                          </FormHelperText>
                        )}
                      </div>
                      <FormControl fullWidth sx={{ select: { textTransform: 'capitalize' } }}>
                        {materialLoading ? (
                          <Skeleton variant="text" width={70} />
                        ) : (
                          <LabelStyle component={'label'} htmlFor="material-status">
                            {'Status'}
                          </LabelStyle>
                        )}
                        {materialLoading ? (
                          <Skeleton variant="rectangular" width="100%" height={56} />
                        ) : (
                          <Select
                            id="material-status"
                            native
                            {...getFieldProps('status')}
                            error={Boolean(touched.status && errors.status)}
                          >
                            <option value="" style={{ display: 'none' }} />
                            {STATUS_OPTIONS.map((status) => (
                              <option key={status} value={status} style={{ textTransform: 'capitalize' }}>
                                {status}
                              </option>
                            ))}
                          </Select>
                        )}
                        {touched.status && errors.status && (
                          <FormHelperText error sx={{ px: 2, mx: 0 }}>
                            {touched.status && errors.status}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Stack>
                  </Card>
                  {materialLoading ? (
                    <Skeleton variant="rectangular" width="100%" height={56} />
                  ) : (
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      size="large"
                      loading={isLoading}
                      sx={{ ml: 'auto', mt: 3 }}
                    >
                      {currentMaterial ? 'Edit Material' : 'Create Material'}
                    </LoadingButton>
                  )}
                </Stack>
              </div>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Box>
  );
}
  MaterialsForm.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool
};
