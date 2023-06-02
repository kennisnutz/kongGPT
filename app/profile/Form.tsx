'use client';
import { useState } from 'react';
import { SafeUser } from '../types';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { TbCameraPlus } from 'react-icons/tb';
import Input from '../components/input/Input';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import convertToBase64 from '../actions/convert';

interface FormProps {
  currentUser?: SafeUser | null | undefined;
}

const Form: React.FC<FormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [previewImage, setPreviewImage] = useState<string | any>(
    currentUser?.image ? currentUser?.image : '/assets/images/profile.png'
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      walletAddress: currentUser?.walletAddress || '',
      image: currentUser?.image || ' ',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    axios
      .put(`/api/user/update`, data)
      .then(() => {
        toast.success('Successfully updated profile');
      })
      .catch((error) => {
        toast.error('Something went wrong could not register!');
      })
      .finally(() => setIsLoading(false));
  };

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;

    if (files) {
      const base64 = await convertToBase64(files[0]);
      setPreviewImage(base64);
      setValue('image', base64);
    }
  };

  return (
    <div className="flex flex-col">
      <div className=" relative flex justify-center py-4 items-center">
        <Image
          src={previewImage}
          width={60}
          height={60}
          alt="profile_image"
          className="rounded-full"
        />
        <div
          className=" absolute 
        bottom-1 right-[50%] 
        rounded-lg border 
      border-indigo-500 
      bg-gray-50 p-1 shadow-md w-12"
        >
          <label
            htmlFor="upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <TbCameraPlus />
          </label>
          <input
            disabled={isLoading}
            id="upload"
            onChange={onUpload}
            type="file"
            className="hidden"
          />
        </div>
      </div>
      <div className="textbox flex flex-col items-center gap-6 mt-3">
        <div className="flex gap-4 w-full justify-between">
          <Input
            type="email"
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            required={false}
            errors={errors}
          />
        </div>
        <div className="flex gap-4 w-full justify-between">
          <Input
            type="text"
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            required={false}
            errors={errors}
          />
        </div>
        <div className="flex gap-4 w-full justify-between">
          <Input
            type="text"
            id="walletAddress"
            label="Wallet Address"
            disabled={isLoading}
            register={register}
            required={false}
            errors={errors}
          />
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Update profile
        </button>
      </div>
    </div>
  );
};

export default Form;
