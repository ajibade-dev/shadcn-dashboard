"use client"

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

 
const formSchema = z.object({
  username: z.string().min(2, {message: "Username must be at least 2 characters"}).max(50),
  email:z.string().email({ message: "Invalid email address!"}),
  phone: z.string().min(10).max(11),
  location:z.string().min(2),
  role:z.enum(['admin', 'user']),
})

const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Ajiabde Paul",
      email: "ajibadeifedolapo17@gmail.com",
      phone:" +2348187977707",
      location: "Lagos, Nigeria",
      role: "admin"
    },
  })
  return (
<div>
<Sheet>
<SheetTrigger asChild>
<Button>Edit User</Button>
</SheetTrigger>
<SheetContent>
<SheetHeader>
<SheetTitle className='mb-4'>Edit User</SheetTitle>
<SheetDescription>  
    <Form {...form}>
        <form className='space-y-8'>
            <FormField control={form.control} name='username' render={({field}) => (
                <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is your public display username.
              </FormDescription>
              <FormMessage />
            </FormItem>
            )} />
            <FormField control={form.control} name='email' render={({field}) => (
                <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Only admin can see your email .
              </FormDescription>
              <FormMessage />
            </FormItem>
            )} /> 
            <FormField control={form.control} name='phone' render={({field}) => (
                <FormItem>
              <FormLabel>Phone No</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Your Phone Number please?
              </FormDescription>
              <FormMessage />
            </FormItem>
            )} />
            <FormField control={form.control} name='location' render={({field}) => (
                <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Your loaction?
              </FormDescription>
              <FormMessage />
            </FormItem>
            )} />
             <FormField control={form.control} name='location' render={({field}) => (
                <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select>
  <SelectTrigger>
    <SelectValue placeholder="Role" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="admin">Admin</SelectItem>
    <SelectItem value="user">User</SelectItem>
    
  </SelectContent>
</Select>
              </FormControl>
              <FormDescription>
                Only verified users can be admin
              </FormDescription>
              <FormMessage />
            </FormItem>
            )} />
            <Button type='submit'>Submit</Button>
        </form>
        </Form>   
</SheetDescription>
</SheetHeader>
</SheetContent>
</Sheet>
</div>
  )
}

export default EditUser