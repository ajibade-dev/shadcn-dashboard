import CardList from '@/components/CardList'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react'
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AppLineChart from '@/components/AppLineChart'

const SingleUserPage = () => {
  return (
    <div>
        <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users/test">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>John Doe</BreadcrumbPage>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/payments">Payments</BreadcrumbLink>
    </BreadcrumbItem>
    
  </BreadcrumbList>
</Breadcrumb>
{/* CONTAINER */}
    <div className='mt-4 flex flex-col xl:flex-row gap-8'>
        {/* left */}
        <div className='w-full xl:w-1/3 space-y-6'>
        {/* user badges container */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
            <h1 className='tet-xl font-semibold'>User Badges</h1>
            <div className='flex gap-4 mt-4'>
                <HoverCard>
  <HoverCardTrigger>
    <BadgeCheck  size={35} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 cursor-pointer' />
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className='font-bold mb-2'>Verified User</h1>
    <p className='text-sm text-muted-foreground '>This user has been verified by the admin</p>
  </HoverCardContent>
</HoverCard>

        <HoverCard>
  <HoverCardTrigger>
    <Citrus  size={35} className='rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2 cursor-pointer' />
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className='font-bold mb-2'>Admin</h1>
    <p className='text-sm text-muted-foreground '>Admin users have access to all the features and can manage users</p>
  </HoverCardContent>
</HoverCard>

        <HoverCard>
  <HoverCardTrigger>
    <Candy  size={35} className='rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2 cursor-pointer' />
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className='font-bold mb-2'>Awarded</h1>
    <p className='text-sm text-muted-foreground '>This user has been awarded for their contributions</p>
  </HoverCardContent>
</HoverCard>

        <HoverCard>
  <HoverCardTrigger>
    <Shield  size={35} className='rounded-full bg-green-500/30 border-1 border-green-500/50 p-2 cursor-pointer' />
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className='font-bold mb-2'>Verified Yapper</h1>
    <p className='text-sm text-muted-foreground '>This user has been verified for been the best yapper</p>
  </HoverCardContent>
</HoverCard>
            </div>
        </div>
        {/* information container */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
            <div className='flex items-center justify-between'>
                 <h1 className='tet-xl font-semibold'>User Information</h1>
                <EditUser />
            </div>
          
           <div className='space-y-4 mt-4'>
            <div className='flex flex-col gap-2 mb-8'>
                <p className='text-sm text-muted-foreground'>Profile Completion</p>
                <Progress value={50} />
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Username</span>
                <span>Ajibade Paul </span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Email</span>
                <span>ajibadeifedolapo17@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Phone No </span>
                <span>08187977707</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Location</span>
                <span>Lagos, Nigeria </span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Role</span>
                <span>Web designer & Developer</span>
            </div>
           </div>
           <p className='font-sm text-muted-foreground mt-4'>Joined 2025</p>
        </div>
        {/* card list container */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
            <CardList title='Recent Transactions'/>
        </div>
        </div>
        {/* right */}
        <div className='w-full xl:w-2/3 space-y-6'>
        {/* user card container */}
        <div className='bg-primary-foreground p-4 rounded-lg space-y-2'>
            <div className='flex items-center gap-2'>
                <Avatar className='size-12'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>PDEV</AvatarFallback>                   
                </Avatar>
                <h1 className='text-xl font-semibold'>Paul Ajibade</h1>
            </div>
            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium sapiente temporibus, itaque labore ullam odio modi tenetur iusto illo?</p>
        </div>
        {/* chart container */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
            <h1 className='text-xl font-semibold'>User Activity</h1>
            <AppLineChart />
        </div>
        </div>
    </div>
    </div>
  )
}

export default SingleUserPage  